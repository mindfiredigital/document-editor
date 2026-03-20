import React, { useState, useEffect, useCallback } from 'react';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useDebounce } from "../../hooks/useDebounce";
import { DocumentState, setDocumentMargins } from "../../redux/documentReducer";
import { CustomSliderVertical, CustomSliderHorizontal, MarginRightArrow, MarginDownArrow, verticalMarks, horizontalMarks } from "./CustomSliderComponents";
import {
    DOMEventHandlers
} from "@mindfiredigital/canvas-editor";

const DEFAULT_MARGINS = [100, 100, 120, 120];

export default function MarginRuler({ documentId }: { documentId: string | undefined }) {
    const dispatch = useDispatch();

    const document: any = useSelector(
        (state: RootState) => state.document
    ) as unknown as DocumentState;

    const [verticalSlider, setVerticalSlider]: any[] = useState<Array<Number>>([]);
    const [horizontalSlider, setHorizontalSlider]: any[] = useState<Array<Number>>([]);

    const margins: any = useDebounce(document.margins, 500);

    const refocusCanvas = () => {
        const canvas = window.document.querySelector('.canvas-editor') as HTMLDivElement;
        if (canvas) {
            canvas.focus();
        }
    };

    const handleChange = useCallback((e: any, value: Array<Number>) => {
        setVerticalSlider(value);
    }, []);

    const handleChangeCommitted = useCallback((e: any, value: Array<Number>) => {
        let [bottom, top]: any[] = value;
        setVerticalSlider(value);
        let margin = [...(margins || DEFAULT_MARGINS)];
        margin[0] = Math.abs(top);
        margin[1] = 1056 - Math.abs(bottom);
        DOMEventHandlers.setPaperMargins(margin);
        dispatch(setDocumentMargins({ margins: margin }));
        refocusCanvas();
    }, [margins, dispatch]);

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
            setVerticalSlider([Math.abs(1056 - margins[1]) * -1, margins[0] * -1]);
            setHorizontalSlider([margins[2], 816 - margins[3]]);
            if (!verticalSlider.length && !horizontalSlider.length) {
                DOMEventHandlers.setPaperMargins(margins);
            }
        }
    }, [margins, documentId]);

    return (
        <React.Fragment>
            <Stack sx={{ height: "1056px", position: "absolute", left: "0px", zIndex: 1 }} direction="row">
                <CustomSliderVertical
                    orientation="vertical"
                    value={verticalSlider.length ? verticalSlider : [-956, -100]}
                    min={-1056}
                    max={0}
                    marks={verticalMarks}
                    onChange={handleChange}
                    onChangeCommitted={handleChangeCommitted}
                    step={24}
                    track="inverted"
                    scale={x => -1056}
                    size="small"
                    slots={{ thumb: MarginRightArrow }}
                    valueLabelDisplay="off"
                />
            </Stack>
            <Stack sx={{ height: "1px", position: "absolute", top: "-1px", width: "816px", left: "calc((100% - 811px) / 2)", zIndex: 1 }} direction="row">
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
        </React.Fragment>
    )
}
