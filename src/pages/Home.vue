<template>
    <section>
        <div class="card-overlay">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div id="search-food" class="py-160">
                            <div class="text-white">
                                <h2 class="font-24 font-weight-bold">Đồ ăn giao hàng từ 20' ...</h2>
                                <div>
                                    Có 43206 Địa Điểm Ở TP. HCM Từ 00:00 - 23:59
                                </div>
                            </div>
                            <div class="form-search">
                                <form class="d-flex py-32">
                                    <input type="text" class="form-control w-75" id="" placeholder="Tìm địa điểm, món ăn..."/>
                                    <button type="submit" class="btn btn-primary"><i class="las la-search" style="font-size: 20px"></i></button>
                                    
                                </form>
                            </div>
                            <div>
                                <a class="btn btn-outline-light mr-2 my-2 px-4 py-2" href="#"
                                    v-for="(item,index) in listCategories" :key="index" >
                                    {{item.name}}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 col-md-12 col-sm-12">
                        <div id="list-content" class="py-5">
                            <div class="form-search">
                                <form class="d-flex">
                                    <input type="text" class="form-control" id="" placeholder="Nhập địa chỉ giao hàng"  style="height: 40px">
                                    <button type="submit" class="btn btn-primary" style="height: 40px"><i class="las la-map-marker-alt" style="font-size: 20px"></i></button>
                                </form>
                            </div>
                            <div class="article mt-4 bg-white py-10 px-32 rounded">
                                <div class="d-flex justify-content-between">
                                    <div class="font-weight-bold font-16">Ưu đãi</div>
                                    <div><a href="#">Xem tất cả</a></div>
                                </div>
                                <div class="items my-3">
                                    <div class="row">
                                        <div class="col-4" 
                                            v-for="(element, index) in listSale" :key="index">
                                            <div class="item border mb-10 rounded mb-md-32">
                                                <div class="active-icon bg-success rounded-circle"></div>
                                                <a href="#">
                                                    <div class="image">
                                                        <img src="../assets/imgs/img-item.jpg" alt="" class="rounded-top rounded-right w-100">
                                                    </div>
                                                    <div class="p-1">
                                                        <div class="font-weight-bold font-14 text-dark">{{element.name}}</div>
                                                        <div class="font-12 text-secondary">{{element.address}}</div>
                                                    </div>
                                                    <div class="border-top text-info font-weight-bold p-1">
                                                        <i class="las la-tag text-danger font-15"></i> Giảm hết {{element.sale}}
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <a href="#">Xem thêm</a>
                                </div>
                            </div>
                            <div class="article mt-4 bg-white py-10 px-32 rounded">
                                <div class="d-flex justify-content-between">
                                    <div class="font-weight-bold font-16">Bộ sưu tập</div>
                                    <div><a href="#">Xem tất cả</a></div>
                                </div>
                                <div class="items my-3">
                                    <div class="row">
                                        <div class="col-4" 
                                            v-for="(element, index) in listCollection" :key="index">
                                            <div class="item border rounded mb-10 mb-md-32">
                                                <a href="#">
                                                    <div class="image">
                                                        <img src="../assets/imgs/img-item.jpg" alt="" class="w-100">
                                                    </div>
                                                    <div class="p-1">
                                                        <div class="font-weight-bold font-14 text-dark">{{element.name}}</div>
                                                        <div class="font-12 text-primary">{{element.address}}</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="article mt-4 bg-white py-10 px-32 rounded">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="font-weight-bold font-16 cursor-pointer"
                                        v-for="(item, index) in listOption" :key="index"
                                        @click="setOptionActive(index)"
                                    >{{item.text}}</div>
                                    <select class="custom-select w-25">
                                        <option selected>Chọn quận</option>
                                        <option value="1" v-for="(item,index) in listDistric" :key="index">{{item.text}}</option>
                                    </select>
                                </div>
                                <div class="items my-3">
                                    <div class="row" 
                                        v-for="(item,index) in listContentOption" :key="index"
                                        v-if="optionActive==index"
                                    >
                                        <div class="col-12"
                                            v-for="(element, index) in item" :key="index"
                                        >
                                            <div class="item border rounded mb-10 mb-md-32">
                                                <a href="#">
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <img src="../assets/imgs/img-item.jpg" alt="" class="w-100">
                                                        </div>
                                                        <div class="p-1 col-8">
                                                            <div class="font-weight-bold font-16 text-dark">{{element.text}}</div>
                                                            <div class="font-14 text-secondary"><i class="las la-map-marker"></i> {{element.address}}</div>
                                                            <div class="font-16 text-dark"><i class="las la-tags"></i> {{element.price}} &nbsp;&nbsp;&nbsp;<b><i class="las la-barcode"></i> Sale: {{element.sale}}</b></div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <a href="#">Xem thêm</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="showArrayTop" class="array-top border d-flex justify-content-center align-items-center cursor-pointer">
                <a href="#"><i class="las la-angle-double-up text-white font-32"></i></a>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            listCategories: [
                {
                    name: "All",
                    link: "#"
                },
                {
                    name: "Đồ ăn",
                    link: "#"
                },
                {
                    name: "Đồ uống",
                    link: "#"
                },
                {
                    name: "Đồ chay",
                    link: "#"
                },
                {
                    name: "Bánh kem",
                    link: "#"
                },
                {
                    name: "Tráng miệng",
                    link: "#"
                },
                {
                    name: "Homemade",
                    link: "#"
                },
                {
                    name: "Vỉa hè",
                    link: "#"
                },
                {
                    name: "Pizza/Buger",
                    link: "#"
                },
                {
                    name: "Món gà",
                    link: "#"
                },
                {
                    name: "Món lẩu",
                    link: "#"
                },
                {
                    name: "Shushi",
                    link: "#"
                },
                {
                    name: "Mì phở",
                    link: "#"
                },
                {
                    name: "Cơm hộp",
                    link: "#"
                }
            ],
            listSale: [
                {
                    name: "The coffe house",
                    address: "100 Kim Mã",
                    sale: "20%"
                },
                {
                    name: "The coffe house",
                    address: "100 Kim Mã",
                    sale: "20%"
                },
                {
                    name: "The coffe house",
                    address: "100 Kim Mã",
                    sale: "20%"
                },
                {
                    name: "The coffe house",
                    address: "100 Kim Mã",
                    sale: "20%"
                },
                {
                    name: "The coffe house",
                    address: "100 Kim Mã",
                    sale: "20%"
                },
                {
                    name: "The coffe house",
                    address: "100 Kim Mã",
                    sale: "20%"
                },
                {
                    name: "The coffe house",
                    address: "100 Kim Mã",
                    sale: "20%"
                },
                {
                    name: "The coffe house",
                    address: "100 Kim Mã",
                    sale: "20%"
                },
                {
                    name: "The coffe house",
                    address: "100 Kim Mã",
                    sale: "20%"
                },
            ],
            listCollection:[
                {
                    name: "Món hot 9k",
                    address: "22 địa điểm"
                },
                {
                    name: "Món hot 9k",
                    address: "22 địa điểm"
                },
                {
                    name: "Món hot 9k",
                    address: "22 địa điểm"
                },
                {
                    name: "Món hot 9k",
                    address: "22 địa điểm"
                },
                {
                    name: "Món hot 9k",
                    address: "22 địa điểm"
                },
                {
                    name: "Món hot 9k",
                    address: "22 địa điểm"
                },
                {
                    name: "Món hot 9k",
                    address: "22 địa điểm"
                },
                {
                    name: "Món hot 9k",
                    address: "22 địa điểm"
                },
                {
                    name: "Món hot 9k",
                    address: "22 địa điểm"
                },
            ],
            listOption:[
                {
                    text: "Gần đây"
                },
                {
                    text: "Bán chạy"
                },
                {
                    text: "Đánh giá"
                },
                {
                    text: "Giao nhanh"
                },
            ],
            listDistric:[
                {
                    text: "Cầu Giấy"
                },
                {
                    text: "Hoàn Kiếm"
                },
                {
                    text: "Bà Đình"
                },
                {
                    text: "Đống Đa"
                },
            ],
            listContentOption:[
                [
                    {
                        text: "Thịt gà chiên xả ớt",
                        address: "Số 1, Mễ Trì, Từ Liêm, Hà Nội",
                        price: "50k",
                        sale: "10%"
                    },
                    {
                        text: "Thịt gà chiên xả ớt",
                        address: "Số 1, Mễ Trì, Từ Liêm, Hà Nội",
                        price: "50k",
                        sale: "10%"
                    },
                    {
                        text: "Thịt gà chiên xả ớt",
                        address: "Số 1, Mễ Trì, Từ Liêm, Hà Nội",
                        price: "50k",
                        sale: "10%"
                    },
                ],
                [
                    {
                        text: "Bán chạy",
                        address: "Số 1, Mễ Trì, Từ Liêm, Hà Nội",
                        price: "50k",
                        sale: "10%"
                    },
                    {
                        text: "Thịt gà chiên xả ớt",
                        address: "Số 1, Mễ Trì, Từ Liêm, Hà Nội",
                        price: "50k",
                        sale: "10%"
                    },
                    {
                        text: "Thịt gà chiên xả ớt",
                        address: "Số 1, Mễ Trì, Từ Liêm, Hà Nội",
                        price: "50k",
                        sale: "10%"
                    },
                ],
                [
                    {
                        text: "Rate",
                        address: "Số 1, Mễ Trì, Từ Liêm, Hà Nội",
                        price: "50k",
                        sale: "10%"
                    },
                    {
                        text: "Thịt gà chiên xả ớt",
                        address: "Số 1, Mễ Trì, Từ Liêm, Hà Nội",
                        price: "50k",
                        sale: "10%"
                    },
                    {
                        text: "Thịt gà chiên xả ớt",
                        address: "Số 1, Mễ Trì, Từ Liêm, Hà Nội",
                        price: "50k",
                        sale: "10%"
                    },
                ],
                [
                    {
                        text: "Deliver",
                        address: "Số 1, Mễ Trì, Từ Liêm, Hà Nội",
                        price: "50k",
                        sale: "10%"
                    },
                    {
                        text: "Thịt gà chiên xả ớt",
                        address: "Số 1, Mễ Trì, Từ Liêm, Hà Nội",
                        price: "50k",
                        sale: "10%"
                    },
                    {
                        text: "Thịt gà chiên xả ớt",
                        address: "Số 1, Mễ Trì, Từ Liêm, Hà Nội",
                        price: "50k",
                        sale: "10%"
                    },
                ],
            ],
            
            optionActive : 0,
            showArrayTop: false,
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        // window.removeEventListener('scroll', this.handleScroll);
    },
    methods:{
        setOptionActive(index){
            this.optionActive = index;
        },
        handleScroll (event) {
            if(window.pageYOffset > 300){
                this.showArrayTop = true;
            }
            else{
                this.showArrayTop = false;
            }
        }
    }
}
</script>

<style lang="scss">
@import "../sass/main.scss";
section{
    background-image: url("../assets/imgs/background-banner.jpg");
    background-size: cover;
    .card-overlay{
        background: rgba(0, 0, 0, 0.5);
        #search-food{
            .form-search{
                form{
                    input[type="text"]{
                        height: 50px;
                    }
                    button{
                        height: 50px;
                    }
                }
            }
        }
        #list-content{
            .article{
                .items{
                    
                    .item{
                        transition: ease .5s;
                        position: relative;
                        .active-icon{
                            width: 20px;
                            height: 20px;
                            position: absolute;
                            top:-5px;
                            left:-5px;
                            z-index: 1;
                        }
                        &:hover{
                            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                        }
                    }
                }
            }
        }  
        .array-top{
            width: 50px;
            height: 50px;
            position: fixed;
            bottom: 10px;
            right: 10px;
        } 
    }
}

</style>        