import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class CustomSliderHorizontalComponent {
    value: FormControl<number | null>;
    horizontalMarks: {
        value: number;
        label: number;
    }[];
    constructor();
    onInputChange(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomSliderHorizontalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomSliderHorizontalComponent, "lib-custom-slider-horizontal", never, {}, {}, never, never, true, never>;
}
