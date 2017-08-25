var xwingConfig = {
  type : 'radar',
  plot : {
    aspect : 'area',
    animation: {
      effect:3,
      sequence:1,
      speed:700
    }
  },
  scaleV : {
    visible : false
  },
  scaleK : {
    values : '0:4:1',
    labels : ['Firepower','Speed','Hyperdrive','Cargo Capacity', 'Cost' ],
    item : {
      fontColor : '#607D8B',
      backgroundColor : "white",
      borderColor : "#aeaeae",
      borderWidth : 1,
      padding : '5 10',
      borderRadius : 10
    },
    refLine : {
      lineColor : '#c10000'
    },
    tick : {
      lineColor : '#59869c',
      lineWidth : 2,
      lineStyle : 'dotted',
      size : 20
    },
    guide : {
      lineColor : "#607D8B",
      lineStyle : 'solid',
      alpha : 0.3,
      backgroundColor : "#c5c5c5 #718eb4"
    }
  },
  series : [
    {
      values : [100, 70, 71, 100, 20],
      lineColor : '#BE2436',
      backgroundColor : '#F4495D'
    }
  ]
};

zingchart.render({ 
  id : 'xwing_chart', 
  data : xwingConfig, 
  height: '100%', 
  width: '100%' 
});

var etaConfig = {
  type : 'radar',
  plot : {
    aspect : 'area',
    animation: {
      effect:3,
      sequence:1,
      speed:700
    }
  },
  scaleV : {
    visible : false
  },
  scaleK : {
    values : '0:4:1',
    labels : ['Firepower','Speed','Hyperdrive','Cargo Capacity', 'Cost' ],
    item : {
      fontColor : '#607D8B',
      backgroundColor : "white",
      borderColor : "#aeaeae",
      borderWidth : 1,
      padding : '5 10',
      borderRadius : 10
    },
    refLine : {
      lineColor : '#c10000'
    },
    tick : {
      lineColor : '#59869c',
      lineWidth : 2,
      lineStyle : 'dotted',
      size : 20
    },
    guide : {
      lineColor : "#607D8B",
      lineStyle : 'solid',
      alpha : 0.3,
      backgroundColor : "#c5c5c5 #718eb4"
    }
  },
  series : [
    {
      values : [90, 100, 35, 55, 8],
      lineColor : '#BE2436',
      backgroundColor : '#F4495D'
    }
  ]
};

zingchart.render({ 
  id : 'eta2_chart', 
  data : etaConfig, 
  height: '100%', 
  width: '100%' 
});

var tieConfig = {
  type : 'radar',
  plot : {
    aspect : 'area',
    animation: {
      effect:3,
      sequence:1,
      speed:700
    }
  },
  scaleV : {
    visible : false
  },
  scaleK : {
    values : '0:4:1',
    labels : ['Firepower','Speed','Hyperdrive','Cargo Capacity', 'Cost' ],
    item : {
      fontColor : '#607D8B',
      backgroundColor : "white",
      borderColor : "#aeaeae",
      borderWidth : 1,
      padding : '5 10',
      borderRadius : 10
    },
    refLine : {
      lineColor : '#c10000'
    },
    tick : {
      lineColor : '#59869c',
      lineWidth : 2,
      lineStyle : 'dotted',
      size : 20
    },
    guide : {
      lineColor : "#607D8B",
      lineStyle : 'solid',
      alpha : 0.3,
      backgroundColor : "#c5c5c5 #718eb4"
    }
  },
  series : [
    {
      values : [60, 80, 0, 60, 82],
      lineColor : '#BE2436',
      backgroundColor : '#F4495D'
    }
  ]
};

zingchart.render({ 
  id : 'tie_chart', 
  data : tieConfig, 
  height: '100%', 
  width: '100%' 
});

var nabooConfig = {
  type : 'radar',
  plot : {
    aspect : 'area',
    animation: {
      effect:3,
      sequence:1,
      speed:700
    }
  },
  scaleV : {
    visible : false
  },
  scaleK : {
    values : '0:4:1',
    labels : ['Firepower','Speed','Hyperdrive','Cargo Capacity', 'Cost' ],
    item : {
      fontColor : '#607D8B',
      backgroundColor : "white",
      borderColor : "#aeaeae",
      borderWidth : 1,
      padding : '5 10',
      borderRadius : 10
    },
    refLine : {
      lineColor : '#c10000'
    },
    tick : {
      lineColor : '#59869c',
      lineWidth : 2,
      lineStyle : 'dotted',
      size : 20
    },
    guide : {
      lineColor : "#607D8B",
      lineStyle : 'solid',
      alpha : 0.3,
      backgroundColor : "#c5c5c5 #718eb4"
    }
  },
  series : [
    {
      values : [40, 73, 100, 60, 12],
      lineColor : '#BE2436',
      backgroundColor : '#F4495D'
    }
  ]
};

zingchart.render({ 
  id : 'n1_chart', 
  data : nabooConfig, 
  height: '100%', 
  width: '100%' 
});

var vultureConfig = {
  type : 'radar',
  plot : {
    aspect : 'area',
    animation: {
      effect:3,
      sequence:1,
      speed:700
    }
  },
  scaleV : {
    visible : false
  },
  scaleK : {
    values : '0:4:1',
    labels : ['Firepower','Speed','Hyperdrive','Cargo Capacity', 'Cost' ],
    item : {
      fontColor : '#607D8B',
      backgroundColor : "white",
      borderColor : "#aeaeae",
      borderWidth : 1,
      padding : '5 10',
      borderRadius : 10
    },
    refLine : {
      lineColor : '#c10000'
    },
    tick : {
      lineColor : '#59869c',
      lineWidth : 2,
      lineStyle : 'dotted',
      size : 20
    },
    guide : {
      lineColor : "#607D8B",
      lineStyle : 'solid',
      alpha : 0.3,
      backgroundColor : "#c5c5c5 #718eb4"
    }
  },
  series : [
    {
      values : [42, 80, 0, 0, 100],
      lineColor : '#BE2436',
      backgroundColor : '#F4495D'
    }
  ]
};

zingchart.render({ 
  id : 'vulture_chart', 
  data : vultureConfig, 
  height: '100%', 
  width: '100%' 
});

