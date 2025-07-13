import * as echarts from 'echarts';
window.onload = init
function init() {
  // 初始化图表

  let art_values = (window as any).data.analyse_all_artifact().then((art_values) => {

    const chartDom = document.getElementById('chart-container');
    const myChart = echarts.init(chartDom);
    const series=[
      {
        type:"bar",
        data:[...art_values.map(v=>{return v[0][1]})]
      },
      {
        type:"bar",
        data:[...art_values.map(v=>{return v[1][1]})]
      },
      {
        type:"bar",
        data:[...art_values.map(v=>{return v[2][1]})]
      },
      {
        type:"bar",
        data:[...art_values.map(v=>{return v[3][1]})]
      },
      {
        type:"bar",
        data:[...art_values.map(v=>{return v[4][1]})]
      }
    ];
    (window as any).data.get_character_list().then((ch_en) => {
      //get_artifact_list
      (window as any).data.get_artifact_list().then((ch_en_art) => {
        let option = {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            },
            formatter:(data)=>{

              let art=art_values[data[0].dataIndex][0][0];
              let main_tag_name=[...art.main_tag.keys()][0];
              let main_tag_value=art.main_tag.get(main_tag_name).toFixed(2);
              let sub_tag_txt="";
              for(let key of art.sub_tag.keys()){
                sub_tag_txt=sub_tag_txt+`<p style="color:green">${key}:${art.sub_tag.get(key).toFixed(2)}</p>`;
              }
              let user_score="";
              for(let art_u of art_values[data[0].dataIndex]){
                if(art_u[2]!=null){
                  user_score=user_score+`<p>${ch_en[art_u[2]]}:${art_u[1].toFixed(2)}</p>`;
                }
              }
              let ch_artifact_name=art.artifact_name;
              if(ch_en_art[art.artifact_name]!=undefined){
                ch_artifact_name=ch_en_art[art.artifact_name];
              }
              let txt=`<p>${ch_artifact_name}:${art.position} lv${art.level}</p>`+
                `<p style="color:red">${main_tag_name}:${main_tag_value}</p>`+
                `${sub_tag_txt}`+
                user_score;
              return txt;
            }
          },
          xAxis: {
            type: 'value',
          },
          yAxis: {
            type: 'category'
          },
          series: series,
          dataZoom: [{
            type: 'slider',
            yAxisIndex: 0,
            filterMode: 'filter'
          }]
        };
        myChart.setOption(option);
      });
    });
  });
}
