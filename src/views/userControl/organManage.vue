<template>
  <div id="organManage">
    <div class="organ-body">
      <div class="body-left">
        <div class="left-item1">
          <el-form :model="selForm" ref="organForm" @submit.native.prevent size="small">
            <el-form-item label>
              <el-input
                v-model="selForm.organName"
                @input="findOrgan"
                prefix-icon="el-icon-search"
                placeholder="搜索组织"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="left-item2">
          <p id="item2-p">组织架构</p>
        </div>
        <!-- 搜索结果 无 -->
        <div class="left-item3-no" v-if="!viewArr.length">
          <img src="../../assets/images/orgNull2.png" />
        </div>
        <!-- 搜索结果 有 -->
        <div class="left-item3-yes" v-else>
          <div
            v-for="(item,index) in viewArr"
            :key="index"
            :class="['yes-div',index == selInd?'yes-div-click':'']"
            @click="clickItem(index)"
          >
            <p>{{item.organName}}</p>
          </div>
        </div>
      </div>
      <div class="body-right">
        <!-- 无组织时 -->
        <div class="right-item-null" v-if="orgFlag">
          <img id="orgFlag-img" src="../../assets/images/orgNull.png" />
          <p id="orgFlag-p">暂无组织</p>
        </div>
        <!-- 有组织时 -->
        <div class="right-item" v-else>
          <div class="item-title">
            <p id="title-p1">{{viewObj.organName}}</p>
            <el-tag type="success" hit size="mini" v-if="viewObj.organCode">已加入</el-tag>
            <el-tag type="warning" hit size="mini" v-else>待加入</el-tag>
          </div>
          <div class="item-cont1">
            <div class="cont1-head head-add">
              <img class="item-img" src="../../assets/images/baseInfo2.png" />
              <p class="public-add-p1">基本信息</p>
            </div>
            <div class="cont1-oper">
              <p class="public-add-p2">
                组织人数：
                <span>{{viewObj.organScale}}</span>
              </p>
            </div>
          </div>
          <div class="item-cont2">
            <div class="cont2-head head-add">
              <img class="item-img" src="../../assets/images/manage2.png" />
              <p class="public-add-p1">管理人员</p>
            </div>
            <div class="cont2-oper" style="padding:10px 0;">
              <p class="public-add-p2">管理人员：{{viewObj.organBoss}}</p>
              <p class="public-add-p2">联系方式：{{viewObj.organPhone}}</p>
            </div>
          </div>
          <div class="item-foot">
            <div class="foot-head head-add">
              <img class="item-img" src="../../assets/images/operate.png" />
              <p class="public-add-p1">具体操作</p>
            </div>
            <div class="foot-oper">
              <el-button type="primary" size="mini" @click="addOrgan">加入组织</el-button>
              <el-button type="danger" size="mini" plain>退出组织</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getAllOrganApi from "../../jsUtil/getRequest.js";
import postApi from "../../jsUtil/postRequest.js";
export default {
  name: "organManage",
  data() {
    return {
      selForm: {
        organName: ""
      },
      //切换状态
      orgFlag: null,
      selInd: null,
      organArr: [],
      viewArr: [],
      viewObj: {}
    };
  },
  created() {
    //加载页面时获取所有商家
    this.getAll();
    //
    this.getInfo(JSON.parse(sessionStorage.getItem("userInfo")).username);
  },
  methods: {
    //查找组织
    findOrgan(val) {
      this.viewArr = [];
      console.log(val);
      if (val) {
        for (const i of this.organArr) {
          if (i.organName.indexOf(val) !== -1) {
            this.viewArr.push(i);
          }
        }
      } else {
        console.log("empty");
        this.orgFlag = true;
        this.selInd = null;
      }
    },
    //选择
    clickItem(val) {
      this.selInd = val;
      this.viewObj = this.organArr[val];
      this.orgFlag = false;
    },
    //获取所有组织
    getAll() {
      getAllOrganApi
        .getAllOrgan()
        .then(res => {
          console.log(res.data.value);
          for (const i of res.data.value) {
            this.organArr.push(i);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获取个人信息
    getInfo(data) {
      let obj={username:data}
      postApi
        .getInfo(obj)
        .then(res => {
          console.log(res.data.value);
          let info = res.data.value;
          if(info.organName != "none"&&info.organCode!="none"){
            this.orgFlag = false;
            this.viewObj = info.organ;
          }else{
            this.orgFlag = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //加入组织
    addOrgan() {
      let data = this.selForm.organName;
      let obj = {
        username: JSON.parse(sessionStorage.getItem("userInfo")).username,
        organName: this.viewObj.organName,
        organCode: this.viewObj.organCode
      };
      console.log(obj);
      postApi
        .addOrgan(obj)
        .then(res => {
          console.log(res.data);
          if (res.data.value.nModified !== 0) {
            this.$message({
              message: "加入成功",
              type: "success",
              duration: 1500
            });
          } else {
            this.$message({
              message: "加入失败",
              type: "error",
              duration: 1500
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/user_css/organManage.scss";
</style>