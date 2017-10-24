<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 3}">
        <Row type="flex">
            <Col :span="spanLeft" class="layout-menu-left">
            <div class="layout-company-left">
                <div v-show="spanLeft >= 3">
                    <CompanyInfo></CompanyInfo>
                </div>

            </div>
            <Menu active-name="1" theme="dark" width="auto">
                <MenuItem name="1">
                <Icon type="ios-navigate" :size="iconSize"></Icon>
                <span class="layout-text">工作台</span>
                </MenuItem>
                <MenuItem name="2">
                <Icon type="ios-keypad" :size="iconSize"></Icon>
                <span class="layout-text">选项 2</span>
                </MenuItem>
                <MenuItem name="3">
                <Icon type="ios-analytics" :size="iconSize"></Icon>
                <span class="layout-text">选项 3</span>
                </MenuItem>
            </Menu>
            </Col>
            <Col :span="spanRight">
            <div class="layout-header">
                <Button type="text" @click="toggleClick" class="layout-header-tool">
                    <Icon type="navicon" size="28"></Icon>
                </Button>
                <div class="layout-header-messageBar">
                    <p class="msg-bar">暂无公告。。。</p>
                </div>
                <div class="layout-header-bar">
                    <div class="layout-ceiling-main">
                        <a href="#">注册登录</a> |
                        <a href="#">帮助中心</a> |
                        <a href="#">安全中心</a> |
                        <a href="#">服务大厅</a>
                    </div>
                </div>
            </div>
            <div class="layout-breadcrumb">
                <Breadcrumb>
                    <BreadcrumbItem href="#">首页</BreadcrumbItem>
                    <BreadcrumbItem href="#">应用中心</BreadcrumbItem>
                    <BreadcrumbItem>某应用</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div class="layout-content">
                <div class="layout-content-main">内容区域</div>
            </div>
            <div class="layout-copyright">
                2017-2017 &copy; MiniLifeStyle
            </div>
            </Col>
        </Row>
    </div>
</template>
<script src="./index.js"></script>
<style scoped lang="less">
    /* .layout-messageBar {
        display: inline-block;
        width:250px;
        height:60px;
        background-color: #cccccc;
    } */

    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
    }

    .layout-breadcrumb {
        padding: 10px 15px 0;
        text-align: left;
    }

    .layout-content {
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }

    .layout-content-main {
        padding: 10px;
    }

    .layout-copyright {
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
        height: 25px;
        line-height: 25px;
        position: fixed;
        bottom: 0;
        width: 100%;
    }

    .layout-menu-left {
        background: #464c5b;
        text-align: left;
    }

    .layout-header {
        height: 40px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
        text-align: left;
        padding-left: 10px;
        overflow: hidden;
        .layout-header-tool {
            position: absolute;
            left: 0;
            display: inline-block;
            height: 40px;
            line-height: 40px;
        }
        .layout-header-messageBar {
            position: absolute;
            height: 40px;
            line-height: 40px;
            // background-color: #CCCCCC;
            width: 500px;
            left: 100px;
            .msg-bar {
                background-color: rgba(255, 43, 77, .08);
                height: 28px;
                // width: 400px;
                border-radius: 10px;
                color: #666;
                line-height: 28px;
                padding-left: 10px;
                padding-right: 10px;
                font-size: 12px;                
                cursor: pointer;
                margin:5px auto;
            }
        }
        .layout-header-bar {
            // display: inline-block;
            padding-right: 15px;
            height: 40px;
            line-height: 40px; // background-color: #FF0033;
            margin-left: 600px;
            text-align: right; // width: 100%;
        }
    }

    .layout-company-left {
        width: 90%;
        height: 60px;
        /* background: #5b6270; */
        /* border-radius: 5px; */
        margin: 10px auto;
    }

    .layout-ceiling-main a {
        color: #9ba7b5;
    }

    .layout-hide-text .layout-text {
        display: none;
        text-align: left;
    }

    .ivu-col {
        transition: width .2s ease-in-out;
    }

    .ivu-row-flex {
        height: 100%
    }

    .ivu-menu-vertical .ivu-menu-item,
    .ivu-menu-vertical .ivu-menu-submenu-title {
        padding: 15px;
    }

    .layout-ceiling {
        display: inline-block;
        min-height: 40px;
        line-height: 40px;
        width: 40%
    }

    .layout-ceiling-main {
        margin-right: 15px;
        width: 100%;
        /* background-color:green; */
        text-align: right;
    }

    .layout-ceiling-main a {
        color: #9ba7b5;
    }
</style>