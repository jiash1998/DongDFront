<template>
  <div id="adminOrgan">
    <!-- 没有创建组织时 -->
    <div class="organ-no" v-if="isCreate ==='none'">
      <el-card>
        <div slot="header">创建组织</div>
        <el-form :model="organForm" size="mini" label-position="left">
          <el-form-item label="组织名称" label-width="100px">
            <el-input v-model="organForm.organName" placeholder="输入完整组织名称"></el-input>
          </el-form-item>
          <el-form-item label="团队号" label-width="100px">
            <el-input type="text" v-model="organForm.organCode" disabled></el-input>
          </el-form-item>
          <el-form-item label="负责人" label-width="100px">
            <el-input v-model="organForm.organBoss" disabled></el-input>
          </el-form-item>
          <el-form-item label="联系方式" label-width="100px">
            <el-input v-model="organForm.organPhone" placeholder="输入联系方式"></el-input>
          </el-form-item>
          <el-form-item label="所属行业" label-width="100px">
            <el-select v-model="organForm.organIndustry" clearable placeholder="请选择">
              <el-option
                v-for="item in options_industry"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="规模(人数)" label-width="100px">
            <el-select v-model="organForm.organScale" clearable placeholder="请选择">
              <el-option
                v-for="item in options_scale"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain @click="toCreate">创建</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
    <!-- 创建了组织后 -->
    <div class="organ-yes" v-if="isCreate !==''&&isCreate!='none'">
      <div class="yes-left">
        <el-menu default-active="1" background-color="#f4f6f8">
          <el-menu-item index="1">
            <router-link tag="div" to="/controlAdmin/adminOrgan/itemBase">
              <i class="el-icon-document"></i>
              <span>基本信息</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link tag="div" to="/controlAdmin/adminOrgan/itemArch">
              <i class="el-icon-data-analysis"></i>
              <span>组织架构</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link tag="div" to="/controlAdmin/adminOrgan/itemMore">
              <i class="el-icon-set-up"></i>
              <span>更多</span>
            </router-link>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="yes-right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import adminApi from "../../jsUtil/postRequest.js";
import manageSession from "../../jsUtil/manageSession.js";
export default {
  name: "adminOrgan",
  data() {
    return {
      isCreate: "",
      organForm: {
        organName: "",
        organCode: "",
        organScale: "",
        organIndustry: "",
        organBoss: "Tom",
        organPhone: ""
      },
      options_scale: [
        {
          value: "选项1",
          label: "1-10人"
        },
        {
          value: "选项2",
          label: "11-20人"
        },
        {
          value: "选项3",
          label: "21-50人"
        },
        {
          value: "选项4",
          label: "51-100人"
        },
        {
          value: "选项5",
          label: "101-200人"
        },
        {
          value: "选项6",
          label: "201-500人"
        },
        {
          value: "选项7",
          label: "501-2000人"
        },
        {
          value: "选项8",
          label: "2000人以上"
        }
      ],
      options_industry: [
        {
          value: "选项1",
          label: "互联网/信息技术"
        },
        {
          value: "选项2",
          label: "教育行业"
        },
        {
          value: "选项3",
          label: "制作业"
        },
        {
          value: "选项4",
          label: "贸易/批发/零售"
        },
        {
          value: "选项5",
          label: "房地产业"
        },
        {
          value: "选项6",
          label: "建筑业"
        },
        {
          value: "选项7",
          label: "金融业"
        },
        {
          value: "选项8",
          label: "服务业"
        },
        {
          value: "选项9",
          label: "运输/物流/仓储"
        },
        {
          value: "选项10",
          label: "文体/娱乐/传媒"
        },
        {
          value: "选项11",
          label: "商业服务/租赁"
        },
        {
          value: "选项12",
          label: "医疗医药"
        },
        {
          value: "选项13",
          label: "社会组织"
        },
        {
          value: "选项14",
          label: "科研服务"
        },
        {
          value: "选项15",
          label: "电/热/燃气/水供应"
        }
      ]
    };
  },
  created() {
    //获取管理员信息
    let adminInfo = JSON.parse(sessionStorage.getItem("adminInfo"));
    console.log(adminInfo);
    this.getOrganSelf(adminInfo.username);
    //生成公司唯一编码
    if (this.isCreate == "") {
      let code = "";
      for (let i = 0; i < 4; i++) {
        code += String.fromCharCode(
          Math.floor(Math.random() * 26 + "a".charCodeAt(0))
        ).toUpperCase();
      }
      code += Math.round(Math.random() * 10000);
      this.organForm.organCode = code;
    }
    //根据用户名获取组织
    this.organForm.organBoss = adminInfo.username;
  },
  methods: {
    //创建组织
    toCreate() {
      let data = this.organForm;
      console.log(data);
      // this.isCreate = "HNYS1233";
      adminApi
        .createOrgan(data)
        .then(res => {
          console.log(res.data);
          if (res.data.msg == "保存成功") {
            this.isCreate = res.data.value.organCode;
          } else {
            this.$message({
              message: "创建失败",
              type: "error",
              duration: 2000
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    //凭借管理员名称取组织
    getOrganSelf(data) {
      let obj = {
        username: data
      };
      adminApi
        .getOrgan(obj)
        .then(res => {
          console.log(res.data);
          if (res.data.value == null) {
            this.isCreate = "none";
          } else {
            this.isCreate = res.data.value.organCode;
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
@import "../../assets/css/admin_css/adminOrgan.scss";
</style>