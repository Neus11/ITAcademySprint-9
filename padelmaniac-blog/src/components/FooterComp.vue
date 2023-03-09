<template>
    <footer>
        <div class="container">
            <div class="left">
                <div class="col-1">
                    <ul>
                        <li>
                            <a href="#" class="icon"><font-awesome-icon icon="fa-brands fa-twitter" /></a> 
                        </li>
                        <li>
                            <a href="#" class="icon"><font-awesome-icon icon="fa-brands fa-instagram" /></a>
                        </li>
                        <li>
                            <a href="#" class="icon"><font-awesome-icon icon="fa-brands fa-youtube" /></a>
                        </li>
                    </ul>
                </div>
                <div class="col-2">
                    <ul>
                        <router-link class="link" to="/"> Padel Maniac Home </router-link>
                    </ul>
                </div>
            </div>
            <div class="right">
                <p>Copyright 2021 All Rights Reserved</p>
            </div>
        </div>
    </footer>
</template>

<script>
</script>

<style lang="scss" scoped>
footer {
  display: block;
  margin-top: auto;
  padding: 50px 25px;
  background-color: #303030;
  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (min-width: 800px) {
      flex-direction: row;
      gap: 0px;
    }
    > div {
      display: flex;
      flex: 1;
    }
    .left {
      gap: 32px;
      color: grey;
      display: flex;
      align-items: center;
      @media (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }
      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }
      .col-1,
      .col-2 {
        gap: 32px;
        display: flex;
        flex: 1;
        @media (min-width: 800px) {
          gap: 0;
        }
      }
      .col-1 {
        flex-direction: column;
        ul {
          margin-top: auto;
          li {
            display: flex;
            align-items: center;
            .icon {
              width: 30px;
              height: auto;
              color: #bebcbc;
            }
          }
        }
      }
      .col-2 {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;
          @media (min-width: 800px) {
            flex-direction: column;
          }
          .link {
            font-size: 18px;
            font-weight: 500;
            color:  #747272;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      gap: 20px;
      color: #747272;
      align-items: center;
      flex-direction: column;
      @media (min-width: 800px) {
        align-items: flex-end;
        gap: 0;
      }
    }
    p {
      margin-top: auto;
    }
  }
}
</style>


