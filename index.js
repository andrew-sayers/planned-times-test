/*
 * Change the values below to whatever you want
 */
const outputs = {
    /* will set this key...     ... to this value */
    "branch-regexp"           : "^maint-",
    "maintenance-window-start": "2021-08-14T09:00:00Z",
    "maintenance-window-end"  : "2021-08-14T10:00:00Z",
    "maintenance-url"         : "https://github.com/andrew-sayers/internal-tools/issues/1",
};

// set the outputs - do not edit below this line
Object.keys(outputs).forEach( key => console.log( `::set-output name=${key}::${outputs[key]}` ) );
Object.keys(outputs).forEach( key => console.log( `${key}: ${outputs[key]}` ) );