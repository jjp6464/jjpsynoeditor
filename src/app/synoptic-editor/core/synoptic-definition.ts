/**
 * Synoptic definition (Visual content)
 */
export class SynopticDefinition {
    /**
     * Name of the synoptic
     */
    name: string;

    /**
     * Collection of items
     */
    items: SynopticDefinitionItem[];
}

/**
 * Holds the configuration of one item of the synoptic
 */
export class SynopticDefinitionItem {
    /**
     * Screen position of the component
     */
    position: SynopticDefinitionItemPosition;

    /**
     * Type name of the component, the type name is the name registered in the synoptic designer
     */
    typeName: string;

    /**
     * Data source of the object
     **/
    dataSource: any;
}

/**
 * Holds position options in the main surface
 */
export class SynopticDefinitionItemPosition {
    /**
     * X position
     */
    x: number;

    /**
     * Y position
     */
    y: number;

    /**
     * Pixel width of the object
     */
    width: number;

    /**
     * Pixel height of the object
     */
    height: number;

    /**
     * Scale factor of the item
     */
    scale: number = 1;

    /**
     * Rotation angle
     */
    angle: number = 0;
}