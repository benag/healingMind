var myGroup = [
  {
      description:"say hello new comer",
      smart:true,
      indexes:["*"],
      // Do something when the commands is triggered
      action:function(i,wildcard){
          artyom.say("sababa");
      }
  }
    // {
    //     description:"say hello new comer",
    //     smart:true,
    //     indexes:["Do you know who is *","I don't know who is *","Is * a good person"],
    //     // Do something when the commands is triggered
    //     action:function(i,wildcard){
    //         var database = ["Carlos","Bruce","David","Joseph","Kenny"];
    //
    //         //If the command "is xxx a good person" is triggered do, else
    //         if(i == 2){
    //             if(database.indexOf(wildcard.trim())){
    //                 artyom.say("I'm a machine, I dont know what is a feeling");
    //             }else{
    //                 artyom.say("I don't know who is " + wildcard + " and i cannot say if is a good person");
    //             }
    //         }else{
    //             if(database.indexOf(wildcard.trim())){
    //                 artyom.say("Of course i know who is "+ wildcard + ". A really good person");
    //             }else{
    //                 artyom.say("My database is not big enough, I don't know who is " + wildcard);
    //             }
    //         }
    //     }
    // },
    // {
    //     indexes:["What time is it","Is too late"],
    //     action:function(i){ // var i returns the index of the recognized command in the previous array
    //         if(i == 0){
    //             aFunctionThatSaysTheTime(new Date());
    //         }else if(i == 1){
    //             artyom.say("Never is too late to do something my friend !");
    //         }
    //     }
    // }
];

artyom.say("shalom hava ma nishma");

artyom.addCommands(myGroup);
