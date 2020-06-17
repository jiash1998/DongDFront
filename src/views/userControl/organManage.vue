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
      </div>
      <div class="body-right">
        <!-- 无组织时 -->
        <div class="right-item-null" v-if="orgFlag">
            <img id="orgFlag-img" src="../../assets/images/orgNull.png"/>
            <p id="orgFlag-p">暂无组织</p>
        </div>
        <!-- 有组织时 -->
        <div class="right-item" v-else>
          <div class="item-title">
              <p id="title-p1">滁州市源分资源回收系统</p>
          </div>
          <div class="item-cont1">
              <div class="cont-head1 public-add">基本信息</div>
              <span>组织人数：</span><span>100人</span>
          </div>
          <div class="item-cont2">
              <div class="cont-head2 public-add">管理人员</div>
              <p>管理人员：顾乐</p>
              <p>联系方式：17856006144</p>
          </div>
          <div class="item-foot">
              <div class="foot-head public-add">具体操作</div>
            <div class="foot-opreate">
                <el-button type="primary" size="small" plain>加入组织</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "organManage",
  data() {
    return {
      selForm: {
        organName: ""
      },
      orgFlag:true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/user_css/organManage.scss";
</style>