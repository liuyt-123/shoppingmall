<template>
    <div>
        <div class="login">
            <h3>我的档案</h3>
            <span class="left">
                <img src="../../assets/images/profile/avatar.svg" alt="">
            </span>
            <span class="center">
                <p>登录/注册</p>
                <p>
                    <img src="../../assets/images/profile/phone.svg" alt="">暂无绑定手机号
                </p>
            </span>    
            <span class="right">></span>   
        </div>
        <div class="banner">
            <span>
                <i>0.00</i>元
                <p>我的余额</p>
            </span>
            <span>
                <i>0</i>个
                <p>我的优惠</p>
            </span>
            <span>
                <i>0</i>分
                <p>我的积分</p>
            </span>
        </div>
        <div class="message">
            <ul>
                <li><img src="../../assets/images/profile/message.svg" alt="">我的消息</li>
                <li><img src="../../assets/images/profile/pointer.svg" alt="">积分商城</li>
                <li><img src="../../assets/images/profile/vip.svg" alt="">会员卡</li>
                <li><img src="../../assets/images/profile/cart.svg" alt="">我的购物车</li>
                <li><img src="../../assets/images/profile/shopping.svg" alt="">下载购物APP</li>
            </ul>
        </div>
       
    </div>
</template>

<script>
export default {
    name: 'Profile'
}
</script>

<style scoped>
 @import  '../../assets/css/profile.css';
</style>