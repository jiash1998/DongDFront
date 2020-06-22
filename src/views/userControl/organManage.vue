<template>
  <div id="organManage">
    <div class="organ-body">
      <div class="body-left">
        <div class="left-item1">
          <el-form :model="selForm" ref="organForm" size="small">
            <el-form-item label>
              <el-input v-model="selForm.organName" prefix-icon="el-icon-search" placeholder="搜索组织"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="left-item2">
          <p id="item2-p">组织架构</p>
        </div>
        <!-- 搜索结果 无 -->
        <div class="left-item3-no" v-if="orgFlag">
          <img src="../../assets/images/orgNull2.png" />
        </div>
        <!-- 搜索结果 有 -->
        <div class="left-item3-yes">
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
          <h1>123</h1>
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
            <p id="title-p1">滁州市源分资源回收系统</p>
            <el-tag type="warning" hit size="mini">待加入</el-tag>
          </div>
          <div class="item-cont1">
            <div class="cont1-head head-add">
              <img class="item-img" src="../../assets/images/baseInfo2.png" />
              <p class="public-add-p1">基本信息</p>
            </div>
            <div class="cont1-oper">
              <p class="public-add-p2">
                组织人数：
                <span>100人</span>
              </p>
            </div>
          </div>
          <div class="item-cont2">
            <div class="cont2-head head-add">
              <img class="item-img" src="../../assets/images/manage2.png" />
              <p class="public-add-p1">管理人员</p>
            </div>
            <div class="cont2-oper" style="padding:10px 0;">
              <p class="public-add-p2">管理人员：顾乐</p>
              <p class="public-add-p2">联系方式：17856006144</p>
            </div>
          </div>
          <div class="item-foot">
            <div class="foot-head head-add">
              <img class="item-img" src="../../assets/images/operate.png" />
              <p class="public-add-p1">具体操作</p>
            </div>
            <div class="foot-oper">
              <el-button type="primary" size="mini">加入组织</el-button>
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
export default {
  name: "organManage",
  data() {
    return {
      selForm: {
        organName: ""
      },
      //切换状态
      orgFlag: false,
      organArr: [
        {
          organName: "滁州市1231231231"
        },
        {
          organName: "滁州市zczxcxzcz"
        },
        {
          organName: "adas滁州市1231231231"
        }
      ]
    };
  },
  created() {
    //加载页面时获取所有商家
    // getAllOrganApi
    //   .getAllOrgan()
    //   .then(res => {
    //     console.log(res);
    //     for (const i of res.data) {
    //         this.organArr.push(i);
    //     }
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/user_css/organManage.scss";
</style>