/**
 * Holds the configuration of the synoptic designer
 */
export class SynopticConfiguration {
    /**
     * Registered components
     */
    private registeredComponents: SynopticConfigurationtRegistration[] = [];

    /**
     * Register a component
     */
    public registerComponent(typeName: string, factory: any) {

        // Add the registered component
        this.registeredComponents.push(new SynopticConfigurationtRegistration(typeName, factory));
    }

    /**
     * Gets the component factory
     */
    public getComponentFactory(typeName: string): any {
        return this.registeredComponents[typeName].factory;
    }
}

/**
 * Component registration
 */
export class SynopticConfigurationtRegistration {
    /**
     * Type name of the component
     */
    typeName: string;

    /**
     * Component factory
     */
    componentFactory: any;

    /**
     * Creates a new registration
     */
    constructor(typeName: string, componentFactory: any) {

        this.typeName = typeName;
        this.componentFactory = componentFactory;
    }
}