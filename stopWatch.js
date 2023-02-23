function StopWatch () {
    this.duration = 0;

    let running = false;
    let startTime = 0;
    let endTime = 0;

    let timestamp = function getCurrentTimestamp () {
        return Date.now()
      }

    this.start = function(){
        if(running == true){
            throw new Error("stopwach has already started");
        }else{
            running = true;
            startTime = timestamp();
        }
    }

    this.stop = function(){
        if(running == false){
            throw new Error("Stopwatch is not started")
        }else{
            running = false;
            endTime = timestamp();
            this.duration += ((endTime - startTime)/1000);
        }
    }

    this.reset = function(){
        this.duration = 0;
        running = false;
        startTime = 0;
        endTime = 0;
    }
}

const sw = new StopWatch();