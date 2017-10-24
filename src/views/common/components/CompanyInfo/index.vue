<template>
    <div class="company-info-store">
        <div class="company-info-logo">
            <avatar shape="square" icon="person" size="large" class="company-info-logo" :src="url"
            />
        </div>

        <div class="company-info-message">
            <p class="company-name">{{company_name}}</p>
            <div style="margin-top:10px;text-align:right">
                <Tag color="blue" class="company-tag">{{tag_name}}</Tag>
                
            </div>
        </div>

    </div>
</template>
<script src="./index.js"></script>
<style scoped lang="less">
    .company-info-store {
        position: relative;
        background-color: #5b6270;
        width: 100%;
        height: 62px;
        border-radius: 5px;
        overflow: hidden;
    }

    .company-info-logo {
        position: absolute;
        left: 0;
        width: 60px;
        height: 60px; // float: left;
        // display: inline-block;
        border-radius: 5px; // text-align: center;
        line-height: 60px;
        overflow: hidden;
    }

    .company-info-message {
        margin-left: 60px;
        text-align: center;
        height: 60px; // background-color: #fff;
        .company-name {
            position: relative;
            color: #fff;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            top:5px
        }
        .company-tag {
            display: inline-block;
            // width:40px;
            font-size:14px;

            
        }
    }
</style>