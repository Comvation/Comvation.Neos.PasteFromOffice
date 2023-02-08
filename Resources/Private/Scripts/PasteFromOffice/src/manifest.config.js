import {$add, $get} from 'plow-js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office'

const addPlugin = (Plugin, isEnabled) => (ckEditorConfiguration, options) => {
    if (!isEnabled || isEnabled(options.editorOptions, options)) {
        ckEditorConfiguration.plugins = ckEditorConfiguration.plugins || [];
        return $add('plugins', Plugin, ckEditorConfiguration);
    }
    return ckEditorConfiguration;
};

export default (ckEditorRegistry, editorConfig) => {
    const config = ckEditorRegistry.get('config');

    config.set('pasteFromOffice', addPlugin(PasteFromOffice, $get('Comvation.Neos:PasteFromOffice')));

    return config;
};
