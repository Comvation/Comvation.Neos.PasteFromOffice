import manifest from '@neos-project/neos-ui-extensibility';
import initializeConfigRegistry from './manifest.config';

manifest('Comvation.Neos:PasteFromOffice', {}, (globalRegistry, {frontendConfiguration}) => {
    const ckEditorRegistry = globalRegistry.get('ckEditor5');
    const editorConfig = frontendConfiguration['Comvation.Neos:PasteFromOffice'];

    initializeConfigRegistry(ckEditorRegistry, editorConfig);
});
