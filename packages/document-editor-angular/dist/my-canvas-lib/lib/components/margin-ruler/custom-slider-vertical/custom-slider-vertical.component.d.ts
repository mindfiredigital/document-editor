import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class CustomSliderVerticalComponent {
    value: FormControl<number | null>;
    verticalMarks: {
        value: number;
        label: number;
    }[];
    constructor();
    onInputChange(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomSliderVerticalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomSliderVerticalComponent, "lib-custom-slider-vertical", never, {}, {}, never, never, true, never>;
}
