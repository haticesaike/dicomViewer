declare module "cornerstone-tools" {
    export function addStackStateManager(element: HTMLElement, stackTypes: string[]): void;

    export function addToolState(element: HTMLElement, toolType: string, toolState: any): void;

    export function getToolState(element: HTMLElement, toolType: string): any;

    export const mouseInput: {
        enable(element: HTMLElement): void;
    };
    export const mouseWheelInput: {
        enable(element: HTMLElement): void;
    };
    export const touchInput: {
        enable(element: HTMLElement): void;
    };
    export const wwwc: {
        activate(element: HTMLElement, button: number): void;
    };
    export const pan: {
        activate(element: HTMLElement, button: number): void;
    };
    export const zoom: {
        activate(element: HTMLElement, button: number): void;
    };
    export const zoomWheel: {
        activate(element: HTMLElement): void;
    };
    export const panTouchDrag: {
        activate(element: HTMLElement): void;
    };
    export const zoomTouchPinch: {
        activate(element: HTMLElement): void;
    };
}