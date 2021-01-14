<template>
  <div class="furmDetail">
    <div class="top">
      <img src="./../../../static/fieldbackground.png" class="background">
      <div class="search">
        <nut-icon type="search" size="14px"></nut-icon>
        <input type="search" placeholder="搜索定制内容"/>
      </div>
      <div class="my-swipe"><img src="./../../../static/lun1.png" style="width: 100%"></div>
    </div>



    <ul class="container">
      <div class="user">
        <img src="#" class="userImg">
        <div class="information">
          <div class="name">农户小吴</div>
          &#8195;&#8195;农业机械化是指农活操作由使用人畜力转移为使用机械，手工劳动被机械操作所取代的过程。农业现代化的重要组成部分。包括:农、林、牧、副、渔等部门生产作业机械化，如农作物的耕种、排灌、植保、收获，渔业的放养、打捞等;产品运输和加工的机械化;农业基本建设施工机械化等。其作用在于提高劳动生产率，减轻劳动强度，提高农业单位面积产量。
        </div>
      </div>
      <div class="nei">
        <img src="./../../../static/field.png" style="width: 100%">
          <div class="information">
            <div class="title">作用</div>
            &#8195;&#8195;使用机器是现代农业的一个基本特征，对于利用资源、抗御自然灾害、推广现代农业技术、促进农业集约经营、增加单产与总产、提高农业劳动生产率、降低农产品成本，以及对于减轻农民劳动强度和缩小工农差别，都有着重大的作用。在社会主义条件下，它还是城乡协作、工农联盟的重要物质基础。</div>
        </div>
    </ul>
    <div class="comment">
      <div class="title">评论</div>
      <ul>
        <li>
          <img src="#" class="userImg">
          <div>
            <div class="userName">投资吴老板</div>
            <div class="neirong">
              机械化能大规模高质量生产，这个项目我有兴趣
            </div>
            <div class="praise">
              <div>
                <van-icon name="good-job-o"  size="20" />
                <span>919</span>
              </div>
              <div>
                <span>回复</span>
              </div>
            </div>
          </div>
        </li>

        <li>
          <img src="#" class="userImg">
          <div>
            <div class="userName">投资吴老板</div>
            <div class="neirong">
              机械化能大规模高质量生产，这个项目我有兴趣
            </div>
            <div class="praise">
              <div>
                <van-icon name="good-job-o"  size="20" />
                <span>919</span>
              </div>
              <div>
                <span>回复</span>
              </div>
            </div>
          </div>
        </li>

      </ul>

      <div class="submit">
        <van-field
          v-model="message"
          rows="3"
          autosize
          label="评论"
          type="textarea"
          maxlength="50"
          placeholder="请输入评论内容"
          show-word-limit
        />
        <div class="btn">
          <button>发表评论</button>
        </div>
      </div>


    </div>



  </div>
</template>

<script>
  import "./../../assets/css/field/furmDetail.css"

  export default {
    data(){
      return{
        message:""
      }
    },
    components: {
    },

    methods:{

    }
  }
</script>
