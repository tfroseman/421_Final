//Any element with the draggable class can be moved and is limited within its parent
interact('draggable')
    .draggable({
       inertia: false,
        restrict:{
            restriction: "parent",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        }
    });