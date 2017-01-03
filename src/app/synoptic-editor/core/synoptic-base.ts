import { Observable } from 'rxjs';

import { SynopticConfiguration } from './index';
import { SynopticDefinition } from './index';

/**
 * Base class for the synoptic controls, holds the features to manage synoptic components
 * In charge of displaying, adding, deleting and moving synoptic items
 */
export class SynopticBase {
    /**
     * Holds the options of the synoptic
     */
    private config: SynopticConfiguration;

    public synopticDefinition: Observable<SynopticDefinition> = new Observable<SynopticDefinition>();

    /**
     *
     */
    constructor() {

    }

    /**
     * Sets the configuration of the synoptic manager
     */
    public setConfig(config: SynopticConfiguration) {
        this.config = config;
    }

    public loadSynopticDefinition(definition: SynopticDefinition) {

    }
}
