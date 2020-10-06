import * as path from 'path';
import * as os from 'os';

import { runTests } from 'vscode-test';

async function main() {
    try {
        // The folder containing the Extension Manifest package.json
        // Passed to `--extensionDevelopmentPath`
        const extensionDevelopmentPath = path.resolve(__dirname, '../../../../');

        // The path to the extension test script
        // Passed to --extensionTestsPath
        const extensionTestsPath = path.resolve(__dirname, './index');

        const testWorkspace = path.resolve(extensionDevelopmentPath, 'test/integrationTests/testAssets/SimpleCppProject');

        const launchArgs = [ "--disable-extensions", testWorkspace ];

        const vscodeExecutablePath = os.platform() === "linux" ? "/snap/bin" : undefined;

        // Download VS Code, unzip it and run the integration test
        await runTests({ launchArgs, extensionDevelopmentPath, extensionTestsPath, vscodeExecutablePath });
    } catch (err) {
        console.error('Failed to run tests');
        process.exit(1);
    }
}

main();
