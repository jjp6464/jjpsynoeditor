/**
 * Base class for an element of the synoptic
 */
export abstract class SynopticComponent {
    public id: string;
    public x: number;
    public y: number;
    public scale: number;
    public angle: number;
    public isSelected: boolean = false;
    public isDragging: boolean = false;
    public isHovered: boolean = false;
    public uniformSizeValue: number;

    /**
     * Occurs on mouseenter event
     */
    protected onMouseEnter(evt: MouseEvent) {
        this.isHovered = true;
    }

    /**
     * Occurs on mouseleave event
     */
    protected onMouseLeave() {
        this.isHovered = false;
    }

    /**
     * Occurs on mousedown event
     */
    protected onMouseDown() {
        this.isDragging = true;
    }

    /**
     * Occurs on mouseup event
     */
    protected onMouseUp() {
        this.isDragging = false;
    }

    /**
     * toggles isSelected boolean value,
     * executes togglePropertiesPanel static method from SynopticManagerComponent
     */
    public onSelect(): void {
        this.isSelected = !this.isSelected;
    }
}