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
      values : [20, 20, 54, 41, 41],
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

