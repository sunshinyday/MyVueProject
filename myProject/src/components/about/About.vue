<template>
    <div>
        <div class="row mb-5">
            <div class="col-4">
                <div class="mb-5 list-group">
                    <router-link tag="li" :to="{name:'historyLink'}" class="mb-3">
                        <a href="" class="list-group-item list-group-item-action">历史订单</a>
                    </router-link>
                    <router-link tag="li" :to="{name:'contactLink'}" class="mb-3">
                        <a href="" class="list-group-item list-group-item-action">联系我们</a>
                    </router-link>
                    <router-link tag="li" :to="{name:'orderingGuideLink'}" class="mb-3">
                        <a href="" class="list-group-item list-group-item-action">点餐文档</a>
                    </router-link>
                    <router-link tag="li" :to="{name:'deliveryLink'}" class="mb-3">
                        <a href="" class="list-group-item list-group-item-action">快递信息</a>
                    </router-link>
                </div>
            </div>
            <div class="col-8">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
