import React, { useState, useEffect, useCallback } from 'react';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import type { RootState } from "../../redux/store";
import { useDebounce } from "../../hooks/useDebounce";
import { DocumentState, setDocumentMargins } from "../../redux/documentReducer";
import { CustomSliderHorizontal, MarginDownArrow, horizontalMarks } from "./CustomSliderComponents";
import { DOMEventHandlers } from "@mindfiredigital/canvas-editor";

const DEFAULT_MARGINS = [100, 100, 120, 120];

export default function HorizontalRuler() {
    const { documentId } = useParams();
    const dispatch = useDispatch();

    const document: any = useSelector(
        (state: RootState) => state.document
    ) as unknown as DocumentState;

    const [horizontalSlider, setHorizontalSlider]: any[] = useState<Array<Number>>([]);

    const margins: any = useDebounce(document.margins, 500);

    const refocusCanvas = () => {
        const canvas = window.document.querySelector('.canvas-editor') as HTMLDivElement;
        if (canvas) {
            canvas.focus();
        }
    };

    const handleChangeHorizontal = useCallback((e: any, value: Array<Number>) => {
        setHorizontalSlider(value);
    }, []);

    const handleChangeHorizontalCommitted = useCallback((e: any, value: Array<Number>) => {
        let [left, right]: any[] = value;
        setHorizontalSlider(value);
        let margin = [...(margins || DEFAULT_MARGINS)];
        margin[2] = left;
        margin[3] = 816 - right;
        DOMEventHandlers.setPaperMargins(margin);
        dispatch(setDocumentMargins({ margins: margin }));
        refocusCanvas();
    }, [margins, dispatch]);

    useEffect(() => {
        if (margins?.length && documentId) {
            setHorizontalSlider([margins[2], 816 - margins[3]]);
        }
    }, [margins, documentId]);

    return (
        <Stack
            sx={{
                height: "1px",
                width: "816px",
                margin: "0 auto",
                position: "relative",
                zIndex: 1,
            }}
            direction="row"
        >
            <CustomSliderHorizontal
                orientation="horizontal"
                value={horizontalSlider.length ? horizontalSlider : [120, 696]}
                min={0}
                max={816}
                marks={horizontalMarks}
                onChange={handleChangeHorizontal}
                onChangeCommitted={handleChangeHorizontalCommitted}
                step={24}
                size="small"
                scale={x => 816}
                slots={{ thumb: MarginDownArrow }}
                valueLabelDisplay="off"
            />
        </Stack>
    );
}
