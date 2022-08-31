<template>
  <div class="demo">
    <div class="demo-top">
      <el-select v-model="value" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item"
        >
        </el-option>
      </el-select>
    </div>

    <div class="demo-middle">
      <template v-for="item in loopData">
        <div :key="item.name" class="loop-container">
          <div class="loop-num">{{ item.num }}</div>
          <span class="loop-name"> {{ item.name }}</span>
          <img
            class="loop-icon"
            :src="item.icon"
            :style="{ 'background-color': item.backgroundColor }"
          />
        </div>
      </template>
    </div>

    <div class="demo-bootom">
      <div class="bootom-left">
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>

        <div class="pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </div>

      <div class="bootom-right">
        <div class="right-top">
          <div class="common-title">开本总计排行</div>
          <div class="top-ui">
            <template v-for="(v, index) in scriptData">
              <div :key="index" class="top-li">
                <div class="top-li_first">{{ index + 1 }}</div>
                <div class="top-li_second">{{ v.name }}</div>
                <div class="top-li_third">{{ v.num }}</div>
              </div>
            </template>
          </div>
        </div>

        <div class="right-bootom">
          <div class="common-title">男女会员比例</div>
          <div id="main"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// import * as echarts from "echarts";

// type EChartsOption = echarts.EChartsOption;

// var chartDom = document.getElementById("main")!;
// var myChart = echarts.init(chartDom, "dark");
// var option: EChartsOption;
@Component({
  components: {},
})
export default class Yk extends Vue {
  private options = [
    {
      value: "总店",
      label: "总店",
    },
    {
      value: "门店",
      label: "门店",
    },
  ];

  private value = {
    value: "总店",
    label: "总店",
  };

  private loopData = [
    {
      name: "今日消费人次",
      num: 56,
      icon: require("../assets/Notes.svg"),
      backgroundColor: "blue",
    },
    {
      name: "总消费人次",
      num: 880,
      icon: require("../assets/ic_group.svg"),
      backgroundColor: "red",
    },
    {
      name: "开本总数",
      num: 66,
      icon: require("../assets/save.svg"),
      backgroundColor: "green",
    },
    {
      name: "总用人数",
      num: 58,
      icon: require("../assets/car.svg"),
      backgroundColor: "yellow",
    },
  ];

  private scriptData = [
    { name: "剧本名一", num: "123次" },
    { name: "剧本名一", num: "108次" },
    { name: "剧本名一", num: "98次" },
    { name: "剧本名一", num: "80次" },
    { name: "剧本名一", num: "77次" },
    { name: "剧本名一", num: "56次" },
    { name: "剧本名一", num: "45次" },
    { name: "剧本名一", num: "79次" },
    { name: "剧本名一", num: "26次" },
  ];
  private tableData = [
    {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    },
    {
      date: "2016-05-04",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1517 弄",
    },
    {
      date: "2016-05-01",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1519 弄",
    },
    {
      date: "2016-05-03",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1516 弄",
    },
  ];

  private mounted() {
    console.log("this.$echarts: ", this.$echarts);
    //基于准备好的dom，初始化echarts实例
    this.$nextTick(() => {
      let myChart = this.$echarts.init(document.getElementById("main"));
      myChart.setOption(this.option);
    });
  }

  private option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      type: "scroll",
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: true,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: false,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 40.7, name: "男会员消费占比" },
          { value: 59.3, name: "女会员消费占比" },
        ],
      },
    ],
  };

  private handleSizeChange(val) {
    console.log(`每页 ${val} 条`);
  }
  private handleCurrentChange(val) {
    console.log(`当前页: ${val}`);
  }
}
</script>

<style lang="scss" scoped>
.demo {
  height: 100vh;
  padding: 0 30px;
  background-color: aliceblue;
  &-top {
    display: flex;
    flex-direction: row-reverse;
    padding: 20px 20px 20px 0;
  }

  &-middle {
    display: flex;
    .loop-container {
      position: relative;
      display: inline-block;
      margin: 0 10px;
      width: 400px;
      height: 200px;
      border: 1px solid red;
      border-radius: 10px;

      .loop-num {
        position: absolute;
        /* width: 100%; */
        /* height: 60px; */
        /* margin: 10px 83px 0 0; */
        color: black;
        font-size: 45px;
        top: 10px;
        left: 20px;
      }

      .loop-name {
        position: absolute;
        top: 133px;
        left: 20px;
      }

      .loop-icon {
        position: absolute;
        top: 110px;
        right: 55px;
        // left: 250px;
        width: 40px;
        height: 40px;
        // border: 1px solid red;
        padding: 5px;
        background-color: red;
        border-radius: 40px;
      }
    }
  }

  &-bootom {
    display: flex;
    margin: 20px 0 0 0;
    .common-title {
      line-height: 45px;
      vertical-align: middle;
      padding-left: 10px;
    }
    .bootom-left {
      width: 70%;
      .pagination {
        margin-top: 20px;
      }
    }
    .bootom-right {
      width: 30%;

      .right-top {
        background-color: white;
        margin-left: 20px;
        border-radius: 11px;
        .top-ui {
          max-height: 203px;
          overflow: auto;
          .top-li {
            // div {
            //   display: inline-block;
            // }
            display: flex;
            margin: 10px 0;
            &_first {
              line-height: 20px;
              width: 20px;
              height: 20px;
              border-radius: 20px;
              background-color: black;
              color: white;
              text-align: center;
              /* margin: 0 10px; */
              margin-left: 10px;
              margin-right: 40px;
            }

            &_second {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 45%;
            }

            &_third {
              margin-left: 20px;
            }
          }
        }
      }

      .right-bootom {
        border-radius: 10px;
        margin-top: 10px;
        background-color: white;
        margin-left: 20px;
        height: 300px;
        #main {
          width: 300px;
          height: 300px;
        }
      }
    }
  }
}
</style>
