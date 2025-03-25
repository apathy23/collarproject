const modVersion = "0.1";

async function mainRun() {
    
    const modAPI = bcModSdk.registerMod({
		name: 'MilliesCollar',
		fullName: 'Millies ritual collar',
		version: modVersion,
		repository: 'https://github.com/apathy23/collarproject',
	});

    function mainCollarLoop() {
        console.log("MillieCollar Loaded")
    };

    modAPI.hookFunction('TimerProcess', 2, (args, next) => { 
        mainCollarLoop();
		next(args);
	})
}

mainRun();