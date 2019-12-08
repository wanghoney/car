<template>
  <el-container>
    <el-header>
  <div>
  <div class="line"></div>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo hidden-xs-only"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="1">
    <template slot="title">选车</template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">买车</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">用车</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">精选</template>
      <el-menu-item index="3-1">选项1</el-menu-item>
      <el-menu-item index="3-2">选项2</el-menu-item>
      <el-menu-item index="3-3">选项3</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title">论坛</template>
      <el-menu-item index="4-1">选项1</el-menu-item>
      <el-menu-item index="4-2">选项2</el-menu-item>
      <el-menu-item index="4-3">选项3</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title">订单管理</template>
      <el-menu-item index="5-1">选项1</el-menu-item>
      <el-menu-item index="5-2">选项2</el-menu-item>
      <el-menu-item index="5-3">选项3</el-menu-item>
    </el-submenu>
  </el-menu>
  </div>
    </el-header>
    <div>
      <el-body>
        <el-carousel :interval="5000" type="card" height="500px" class="hidden-xs-only">
        <el-carousel-item v-for="item in list" :key="item">
          <img v-bind:src="item.imgUrl">
        </el-carousel-item>
        </el-carousel>
      </el-body>
    </div>
    <div>
      <el-divider><i class="el-icon-setting">订单管理</i></el-divider>
    </div>
    <div>
      <el-row :gutter="20">
        <el-col :span="10"><div class="grid-content bg-purple">
      <el-form :inline="true" :model="formInline" class="">

          <el-input v-model="formInline.user" placeholder="请输入商品名称或退款单号"></el-input>
      </el-form>
        </div></el-col>

        <el-col :span="3"><div class="grid-content bg-purple">
        <div>

          <el-select v-model="value" placeholder="选择申请时间">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        </div></el-col>


        <el-col :span="1"><div class="grid-content bg-purple">
          <el-form :inline="true" :model="formInline" class="">

            <el-button type="primary" icon="el-icon-search">查询</el-button>
          </el-form>
        </div></el-col>


      </el-row>
    </div><br><br>
    <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">全部</el-menu-item>
        <el-menu-item index="2">待支付</el-menu-item>
        <el-menu-item index="3">待收货</el-menu-item>
        <el-menu-item index="4">已完成</el-menu-item>
        <el-menu-item index="5">退款售后</el-menu-item>
      </el-menu>
    </div>

    <div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          fixed
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="province"
          label="省份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="carname"
          label="商品名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="number"
          label="数量"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-container>
</template>


<script>
  export default {
    name: "page",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        list:[
          {imgUrl:('../static/5.jpg')},
          {imgUrl:('../static/6.jpg')},
          {imgUrl:('../static/7.jpg')},
          {imgUrl:('../static/8.jpg')},

        ],
        formInline: {
          user: '',
          region: ''
        },
        options: [{
          value: '选项1',
          label: '近一个月'
        }, {
          value: '选项2',
          label: '近两个月'
        }],
        tableData: [{
          date: '2019-05-02',
          name: '王先生',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          carname:'Jeep',
          number: 'x1'
        }, {
          date: '2019-05-04',
          name: '王先生',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          carname:'Jeep',
          number: 'x1'
        }, {
          date: '2019-05-01',
          name: '王先生',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          carname:'Jeep',
          number: 'x1'
        },
          {
            date: '2019-05-01',
            name: '王先生',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1519 弄',
            carname:'Jeep',
            number: 'x1'
          },
          {
            date: '2019-08-01',
            name: '王先生',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1519 弄',
            carname:'Jeep',
            number: 'x1'
          },
          {
            date: '2019-06-01',
            name: '王先生',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1519 弄',
            carname:'Jeep',
            number: 'x1'
          },{
          date: '2019-09-11',
          name: '王先生',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
            carname:'Jeep',
          number: 'x1'
        }]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      onSubmit() {
        console.log('submit!');
      },
      handleClick(row) {
        console.log(row);
      }
    }
  }

</script>

<style scoped>


</style>
