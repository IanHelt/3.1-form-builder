// The Form Data
'use strict';
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object

  //0
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  //1
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  //2
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  //3
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  //4
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  //5
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  //6
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  //7
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------

  for(var i = 0; i < formData.length;i++){
    var type = formData[i].type;
    var label = formData[i].label;
    var id = formData[i].id;
    var icon = formData[i].icon;
    var options = formData[i].options;


    if(formData[i].type === 'textarea'){
      var newInput = document.createElement('textarea');
    }
    else if (formData[i].type === 'select') {
      var newInput = document.createElement('select');

      for(var x = 0; x < options.length; x++){
        var option = options[x];
        var opt = document.createElement('option');
        opt.setAttribute('value', option.value);
        opt.appendChild(document.createTextNode(option.label));
        newInput.appendChild(opt);
      }
    }
    else{
  var newInput = document.createElement("input");
  newInput.type = type;
    }
  newInput.placeholder = label;
  newInput.id = id;
  newInput.icon = icon;
  document.getElementById('fields').appendChild(newInput);
  }
