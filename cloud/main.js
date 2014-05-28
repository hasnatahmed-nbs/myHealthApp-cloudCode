

Parse.Cloud.define("addCondition", function(request, response) {
  console.log(request.params)
	var condition = Parse.Object.extend("Conditions");
  var conditions = new condition();
  conditions.set("name", request.params.name);
  conditions.set("status", request.params.status);
  conditions.set("date", request.params.date);
  conditions.set("userId", request.params.userId);
  conditions.save(null, {
    success: function(condition) {
      response.success(condition); 
     },
    error: function(gameScore, error) {
       response.error(error); 
    }
  });
});


Parse.Cloud.define("addMedication", function(request, response) {
  console.log(request.params)
    var medication = Parse.Object.extend("Medications");
    var medications = new medication();
    medications.set("name", request.params.name);
    medications.set("method", request.params.form);
    medications.set("start", request.params.start);
    medications.set("reason", request.params.reason);
    medications.set("end", request.params.end);
    medications.set("dose", request.params.dose);
    medications.set("total_medicine", request.params.tdoses);
    medications.set("frequency", request.params.frequency);
    medications.set("notes", request.params.note);
    medications.set("userId", request.params.userId);
    medications.save(null, {
      success: function(medication) {
        response.success(medication);
      },
      error: function(error) {
        response.error(error);
      }
    });
});


Parse.Cloud.define("checkUserName", function(request, response) {
   var query = new Parse.Query("User");
   query.equalTo("username", request.params.username);
   query.find({
    success: function(results) {
      var sum = 0;
      for (var i = 0; i < results.length; ++i) {
        sum=sum+1;
      }
      sum==0 ? response.success("1") : response.success("0");
    },
    error: function(error) {
      response.error(error);
    }
  });
});

Parse.Cloud.define("getUserMedications", function(request, response) {
   var query = new Parse.Query("Medications");
   console.log(request.params.userId)
   query.equalTo("userId", request.params.userId);
   query.find({
    success: function(results) {
      response.success(results)
    },
    error: function(error) {
      response.error(error);
    }
  });
});

Parse.Cloud.define("getUserConditions", function(request, response) {
   var query = new Parse.Query("Conditions");
   console.log(request.params.userId)
   query.equalTo("userId", request.params.userId);
   query.find({
    success: function(results) {
      response.success(results)
    },
    error: function(error) {
      response.error(error);
    }
  });
});

Parse.Cloud.define("signup", function(request, response) {
    var user = Parse.Object.extend("User");
    var usr = new user();
    usr.set("email", request.params.email);
    usr.set("username", request.params.username);
    usr.set("password", request.params.password);
    usr.save(null, {
      success: function(user) {
        response.success(user);
      },
      error: function(error) {
        response.error(error);
      }
    });
});

//Cloud Code to add vaccination
    Parse.Cloud.define("addVaccination", function(request, response) {
        console.log(request.params)
        var vaccination = Parse.Object.extend("Vaccination");
        var vaccination = new vaccination();
        vaccination.set("name", request.params.name);
        vaccination.set("whenGiven", request.params.form);
        vaccination.set("sequence", request.params.start);
        vaccination.set("adverseEvent", request.params.reason);
        vaccination.set("maker", request.params.end);
        vaccination.set("lotNumber", request.params.dose);
        vaccination.set("notes", request.params.tdoses);
        vaccination.save(null, {
            success: function(vaccination) {
                response.success(vaccination);
            },
            error: function(error) {
                response.error(error);
            }
        });
    });

    //Cloud Code to get vaccination
    Parse.Cloud.define("getUserVaccinations", function(request, response) {
        var query = new Parse.Query("Vaccination");
        console.log(request.params.userId);
        query.equalTo("userId", request.params.userId);
        query.find({
            success: function(results) {
                response.success(results)
            },
            error: function(error) {
                response.error(error);
            }
        });
    });