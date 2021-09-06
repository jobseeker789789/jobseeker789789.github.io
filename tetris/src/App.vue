// .skyblue_block{background-color: skyblue;}
// .blue_block{background-color: blue;}
// .orange_block{background-color: orange;}
// .yellow_block{background-color: yellow;}
// .green_block{background-color: green;}
// .pupple_block{background-color: purple;}
// .red_block{background-color: red;}
<template>
  <h1 @click="reset_current_block">Tetris</h1>

  <div class="score">
    <div class="title">score</div>
    <div class="content">{{score}}</div>
  </div>
    <table class="playground">
      <tr class="row" v-for="(n, i) in cell_info_arr" :key="i">
        <td class="col" 
        v-for="(m, j) in cell_info_arr[i]" 
        :key="j"
        :class="{
          'skyblue_block': (current_block.is_current_block(i, j) && current_block.block_type == 0) || (m.blocked && m.block_type == 0),
          'blue_block': (current_block.is_current_block(i, j) && current_block.block_type == 1) || (m.blocked && m.block_type == 1),
          'orange_block': (current_block.is_current_block(i, j) && current_block.block_type == 2) || (m.blocked && m.block_type == 2),
          'yellow_block': (current_block.is_current_block(i, j) && current_block.block_type == 3) || (m.blocked && m.block_type == 3),
          'green_block': (current_block.is_current_block(i, j) && current_block.block_type == 4) || (m.blocked && m.block_type == 4),
          'pupple_block': (current_block.is_current_block(i, j) && current_block.block_type == 5) || (m.blocked && m.block_type == 5),
          'red_block': (current_block.is_current_block(i, j) && current_block.block_type == 6) || (m.blocked && m.block_type == 6)
        }"
      >
        </td>
      </tr>
    </table>
    <button v-if="!game_in_process" @click="game_start">Game Start</button>

</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      current_block_creator: class something_class {
        constructor(){
          this.rotation_state = 0;
          this.block_type = this.getRandomInt(0,7);
          switch(this.block_type){
            case 0: 
              this.locations = [
                {x: 3, y: 0},
                {x: 4, y: 0},
                {x: 5, y: 0},
                {x: 6, y: 0}
              ]
              break;
            case 1: 
              this.locations = [
                {x: 3, y: 0},
                {x: 4, y: 0},
                {x: 5, y: 0},
                {x: 5, y: 1}
              ]
              break;
            case 2: 
              this.locations = [
                {x: 3, y: 0},
                {x: 3, y: 1},
                {x: 4, y: 0},
                {x: 5, y: 0}
              ]
              break;
            case 3: 
              this.locations = [
                {x: 3, y: 0},
                {x: 3, y: 1},
                {x: 4, y: 0},
                {x: 4, y: 1}
              ]
              break;
            case 4: 
              this.locations = [
                {x: 3, y: 1},
                {x: 4, y: 0},
                {x: 4, y: 1},
                {x: 5, y: 0}
              ]
              break;
            case 5: 
              this.locations = [
                {x: 3, y: 1},
                {x: 4, y: 0},
                {x: 4, y: 1},
                {x: 5, y: 1}
              ]
              break;
            case 6: 
              this.locations = [
                {x: 3, y: 0},
                {x: 4, y: 0},
                {x: 4, y: 1},
                {x: 5, y: 1}
              ]
              break;
            default:
              alert("난수 생성 오류!");
          }

        }
        getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
        }
        move_left(cell_info_arr){
          if(0 < this.locations[0].x
          && 0 < this.locations[1].x
          && 0 < this.locations[2].x
          && 0 < this.locations[3].x
          && !cell_info_arr[this.locations[0].y][this.locations[0].x-1].blocked
          && !cell_info_arr[this.locations[1].y][this.locations[1].x-1].blocked
          && !cell_info_arr[this.locations[2].y][this.locations[2].x-1].blocked
          && !cell_info_arr[this.locations[3].y][this.locations[3].x-1].blocked
          ){
            this.locations[0].x--;
            this.locations[1].x--;
            this.locations[2].x--;
            this.locations[3].x--;
          }
        }
        move_right(cell_info_arr){
          if(this.locations[0].x < 9
          && this.locations[1].x < 9
          && this.locations[2].x < 9
          && this.locations[3].x < 9
          && !cell_info_arr[this.locations[0].y][this.locations[0].x+1].blocked
          && !cell_info_arr[this.locations[1].y][this.locations[1].x+1].blocked
          && !cell_info_arr[this.locations[2].y][this.locations[2].x+1].blocked
          && !cell_info_arr[this.locations[3].y][this.locations[3].x+1].blocked
          ){
            this.locations[0].x++;
            this.locations[1].x++;
            this.locations[2].x++;
            this.locations[3].x++;
          }
        }
        move_down(app){
          // y가 19 미만이면 한 칸 내리기
          // 더 이상 내려 갈 수 없으면 ...
          if(this.locations[0].y == 19
          || this.locations[1].y == 19
          || this.locations[2].y == 19
          || this.locations[3].y == 19
          ){
            // 바닥과 닿아서 종료
            app.block_embedding();  
            app.reset_current_block();
            return false
          }else{
            // 마지막 칸이 아니라면 한 칸 내려주기
            this.locations[0].y++;
            this.locations[1].y++;
            this.locations[2].y++;
            this.locations[3].y++;

            if(app.cell_info_arr[this.locations[0].y][this.locations[0].x].blocked
            || app.cell_info_arr[this.locations[1].y][this.locations[1].x].blocked
            || app.cell_info_arr[this.locations[2].y][this.locations[2].x].blocked
            || app.cell_info_arr[this.locations[3].y][this.locations[3].x].blocked
            ){  
              // 다른 블록과 닿아서 종료
              this.locations[0].y--;
              this.locations[1].y--;
              this.locations[2].y--;
              this.locations[3].y--;

              app.block_embedding();  
              app.reset_current_block();

              return false
            }
          }
          return true
        }
        rotation(cell_info_arr){
          this.rotation_state++;
          let for_backup = this.locations;

          switch(this.block_type){
            case 0:
              switch(this.rotation_state%4){
                case 0:
                  this.locations = [
                    {x: this.locations[0].x-2, y: this.locations[0].y},
                    {x: this.locations[1].x-1, y: this.locations[1].y-1},
                    {x: this.locations[2].x, y: this.locations[2].y-2},
                    {x: this.locations[3].x+1, y: this.locations[3].y-3}
                  ]
                  break;
                case 1:
                  this.locations = [
                    {x: this.locations[0].x+2, y: this.locations[0].y},
                    {x: this.locations[1].x+1, y: this.locations[1].y+1},
                    {x: this.locations[2].x, y: this.locations[2].y+2},
                    {x: this.locations[3].x-1, y: this.locations[3].y+3}
                  ]
                  break;
                case 2:
                  this.locations = [
                    {x: this.locations[0].x-2, y: this.locations[0].y},
                    {x: this.locations[1].x-1, y: this.locations[1].y-1},
                    {x: this.locations[2].x, y: this.locations[2].y-2},
                    {x: this.locations[3].x+1, y: this.locations[3].y-3}
                  ]
                  break;
                case 3:
                  this.locations = [
                    {x: this.locations[0].x+2, y: this.locations[0].y},
                    {x: this.locations[1].x+1, y: this.locations[1].y+1},
                    {x: this.locations[2].x, y: this.locations[2].y+2},
                    {x: this.locations[3].x-1, y: this.locations[3].y+3}
                  ]
                  break;
              }
              break;
            case 1:
              switch(this.rotation_state%4){
                case 0:
                  this.locations = [
                    {x: this.locations[0].x-1, y: this.locations[0].y},
                    {x: this.locations[1].x, y: this.locations[1].y-1},
                    {x: this.locations[2].x+1, y: this.locations[2].y-2},
                    {x: this.locations[3].x, y: this.locations[3].y+1}
                  ]
                  break;
                case 1:
                  this.locations = [
                    {x: this.locations[0].x, y: this.locations[0].y+2},
                    {x: this.locations[1].x, y: this.locations[1].y},
                    {x: this.locations[2].x-1, y: this.locations[2].y+1},
                    {x: this.locations[3].x-1, y: this.locations[3].y+1}
                  ]
                  break;
                case 2:
                  this.locations = [
                    {x: this.locations[0].x, y: this.locations[0].y-2},
                    {x: this.locations[1].x-1, y: this.locations[1].y+1},
                    {x: this.locations[2].x, y: this.locations[2].y},
                    {x: this.locations[3].x+1, y: this.locations[3].y-1}
                  ]
                  break;
                case 3:
                  this.locations = [
                    {x: this.locations[0].x+1, y: this.locations[0].y},
                    {x: this.locations[1].x+1, y: this.locations[1].y},
                    {x: this.locations[2].x, y: this.locations[2].y+1},
                    {x: this.locations[3].x, y: this.locations[3].y-1}
                  ]
                  break;
              }
              break;
            case 2:
              switch(this.rotation_state%4){
                case 0:
                  this.locations = [
                    {x: this.locations[0].x-1, y: this.locations[0].y},
                    {x: this.locations[1].x-1, y: this.locations[1].y},
                    {x: this.locations[2].x, y: this.locations[2].y-2},
                    {x: this.locations[3].x, y: this.locations[3].y-2}
                  ]
                  break;
                case 1:
                  this.locations = [
                    {x: this.locations[0].x, y: this.locations[0].y},
                    {x: this.locations[1].x+1, y: this.locations[1].y-1},
                    {x: this.locations[2].x, y: this.locations[2].y+1},
                    {x: this.locations[3].x-1, y: this.locations[3].y+2}
                  ]
                  break;
                case 2:
                  this.locations = [
                    {x: this.locations[0].x, y: this.locations[0].y+1},
                    {x: this.locations[1].x, y: this.locations[1].y+1},
                    {x: this.locations[2].x+1, y: this.locations[2].y-1},
                    {x: this.locations[3].x+1, y: this.locations[3].y-1}
                  ]
                  break;
                case 3:
                  this.locations = [
                    {x: this.locations[0].x+1, y: this.locations[0].y-1},
                    {x: this.locations[1].x, y: this.locations[1].y},
                    {x: this.locations[2].x-1, y: this.locations[2].y+2},
                    {x: this.locations[3].x, y: this.locations[3].y+1}
                  ]
                  break;
              }
              break;
            case 3:
              // 아무것도 안 함
              break;
            case 4:
              switch(this.rotation_state%4){
                case 0:
                  this.locations = [
                    {x: this.locations[0].x, y: this.locations[0].y+1},
                    {x: this.locations[1].x+1, y: this.locations[1].y-1},
                    {x: this.locations[2].x, y: this.locations[2].y},
                    {x: this.locations[3].x+1, y: this.locations[3].y-2}
                  ]
                  break;
                case 1:
                  this.locations = [
                    {x: this.locations[0].x, y: this.locations[0].y-1},
                    {x: this.locations[1].x-1, y: this.locations[1].y+1},
                    {x: this.locations[2].x, y: this.locations[2].y},
                    {x: this.locations[3].x-1, y: this.locations[3].y+2}
                  ]
                  break;
                case 2:
                  this.locations = [
                    {x: this.locations[0].x, y: this.locations[0].y+1},
                    {x: this.locations[1].x+1, y: this.locations[1].y-1},
                    {x: this.locations[2].x, y: this.locations[2].y},
                    {x: this.locations[3].x+1, y: this.locations[3].y-2}
                  ]
                  break;
                case 3:
                  this.locations = [
                    {x: this.locations[0].x, y: this.locations[0].y-1},
                    {x: this.locations[1].x-1, y: this.locations[1].y+1},
                    {x: this.locations[2].x, y: this.locations[2].y},
                    {x: this.locations[3].x-1, y: this.locations[3].y+2}
                  ]
                  break;
              }
              break;
            case 5:
              switch(this.rotation_state%4){
                case 0:
                  this.locations = [
                    {x: this.locations[0].x, y: this.locations[0].y},
                    {x: this.locations[1].x, y: this.locations[1].y},
                    {x: this.locations[2].x, y: this.locations[2].y},
                    {x: this.locations[3].x+1, y: this.locations[3].y-1}
                  ]
                  break;
                case 1:
                  this.locations = [
                    {x: this.locations[0].x+1, y: this.locations[0].y-1},
                    {x: this.locations[1].x, y: this.locations[1].y+1},
                    {x: this.locations[2].x, y: this.locations[2].y+1},
                    {x: this.locations[3].x, y: this.locations[3].y}
                  ]
                  break;
                case 2:
                  this.locations = [
                    {x: this.locations[0].x-1, y: this.locations[0].y+1},
                    {x: this.locations[1].x, y: this.locations[1].y},
                    {x: this.locations[2].x, y: this.locations[2].y},
                    {x: this.locations[3].x, y: this.locations[3].y}
                  ]
                  break;
                case 3:
                  this.locations = [
                    {x: this.locations[0].x, y: this.locations[0].y},
                    {x: this.locations[1].x, y: this.locations[1].y-1},
                    {x: this.locations[2].x, y: this.locations[2].y-1},
                    {x: this.locations[3].x-1, y: this.locations[3].y+1}
                  ]
                  break;
              }
              break;
            case 6:
              switch(this.rotation_state%4){
                case 0:
                  this.locations = [
                    {x: this.locations[0].x, y: this.locations[0].y-1},
                    {x: this.locations[1].x+1, y: this.locations[1].y-2},
                    {x: this.locations[2].x, y: this.locations[2].y+1},
                    {x: this.locations[3].x+1, y: this.locations[3].y}
                  ]
                  break;
                case 1:
                  this.locations = [
                    {x: this.locations[0].x, y: this.locations[0].y+1},
                    {x: this.locations[1].x-1, y: this.locations[1].y+2},
                    {x: this.locations[2].x, y: this.locations[2].y-1},
                    {x: this.locations[3].x-1, y: this.locations[3].y}
                  ]
                  break;
                case 2:
                  this.locations = [
                    {x: this.locations[0].x, y: this.locations[0].y-1},
                    {x: this.locations[1].x+1, y: this.locations[1].y-2},
                    {x: this.locations[2].x, y: this.locations[2].y+1},
                    {x: this.locations[3].x+1, y: this.locations[3].y}
                  ]
                  break;
                case 3:
                  this.locations = [
                    {x: this.locations[0].x, y: this.locations[0].y+1},
                    {x: this.locations[1].x-1, y: this.locations[1].y+2},
                    {x: this.locations[2].x, y: this.locations[2].y-1},
                    {x: this.locations[3].x-1, y: this.locations[3].y}
                  ]
                  break;
              }
              break;
          }
          if(
            // 회전 결과, 블록이 테이블 밖으로 삐져나가는 경우에는 while문을 통해 보정하도록 수정하기 (양 끝에서 회전불가현상은 완전히 해소하기)
            (this.locations[0].x < 0 || 9 < this.locations[0].x || 19 < this.locations[0].y)
            || (this.locations[1].x < 0 || 9 < this.locations[1].x || 19 < this.locations[1].y)
            || (this.locations[2].x < 0 || 9 < this.locations[2].x || 19 < this.locations[2].y)
            || (this.locations[3].x < 0 || 9 < this.locations[3].x || 19 < this.locations[3].y)
            || cell_info_arr[this.locations[0].y][this.locations[0].x].blocked
            || cell_info_arr[this.locations[1].y][this.locations[1].x].blocked
            || cell_info_arr[this.locations[2].y][this.locations[2].x].blocked
            || cell_info_arr[this.locations[3].y][this.locations[3].x].blocked
          ){
            this.locations = for_backup;
            this.rotation_state--;
          }
        }
        press_space_bar(app){
          let fake_condition = true;
          while(fake_condition){
            let result = this.move_down(app);
            if(!result){
              break;
            }
          }
        }
        is_current_block(i, j){
            if(
              (i == this.locations[0].y && j == this.locations[0].x)
              || (i == this.locations[1].y && j == this.locations[1].x)
              || (i == this.locations[2].y && j == this.locations[2].x)
              || (i == this.locations[3].y && j == this.locations[3].x)
            ){
              return true
            }else{
              return false
            }
        }
      },
      game_in_process: false,
      current_block: null,
      cell_info_arr: null,
      score: 0,
      timer: null
    }
  },
  methods: {
    temp_function: function(){
      let temp_obj = new this.temp_class;
      console.log(temp_obj);
    },
    game_start: function(){
      this.game_in_process = true;
      this.create_game_board();
      this.reset_current_block();

      this.timer = setInterval(() => {
        this.current_block.move_down(this);
      }, 1000);
    },
    is_game_over: function(){
      for(let i of this.cell_info_arr[0]){
        if(i.blocked){
          console.log("game over!");
          this.game_in_process = false

          clearInterval(this.timer);
          return true
        }
      }
      return false
    },
    create_game_board: function(){
      let temp_table = [];
      for(let i=0; i<20; i++){
        let temp_row = [];
        for(let j=0; j<10; j++){
          temp_row.push(
            {
              blocked: false,
              block_type: null
            }
          )
        }
        temp_table.push(temp_row);
      }
      this.cell_info_arr = temp_table;
    },
    supply_new_row: function(){
      let temp_row = [];
      for(let i=0; i<10; i++){
        temp_row.push(
          {blocked: false, block_type: "red_block"}
        );
      }
      this.cell_info_arr.unshift(temp_row);
    },
    reset_current_block: function(){
      this.current_block = new this.current_block_creator();
    },
    block_embedding: function(){
      this.cell_info_arr[this.current_block.locations[0].y][this.current_block.locations[0].x].blocked = true;
      this.cell_info_arr[this.current_block.locations[0].y][this.current_block.locations[0].x].block_type = this.current_block.block_type;
      this.cell_info_arr[this.current_block.locations[1].y][this.current_block.locations[1].x].blocked = true;
      this.cell_info_arr[this.current_block.locations[1].y][this.current_block.locations[1].x].block_type = this.current_block.block_type;
      this.cell_info_arr[this.current_block.locations[2].y][this.current_block.locations[2].x].blocked = true;
      this.cell_info_arr[this.current_block.locations[2].y][this.current_block.locations[2].x].block_type = this.current_block.block_type;
      this.cell_info_arr[this.current_block.locations[3].y][this.current_block.locations[3].x].blocked = true;
      this.cell_info_arr[this.current_block.locations[3].y][this.current_block.locations[3].x].block_type = this.current_block.block_type;
      
      if(!this.is_game_over()){
        this.clear_row();
      }
      },
    clear_row: function(){
      for(let i=0; i<this.cell_info_arr.length; i++){
        let observer = true;
        for(let j=0; j<this.cell_info_arr[i].length; j++){
          if(this.cell_info_arr[i][j].blocked == false){
            observer = false;
          }
        }
        if(observer){
          this.score += 100;
          this.cell_info_arr.splice(i,1);
          this.supply_new_row();
        }
      }
    }
  },

  // event handler
  mounted: function(){


    // current_block 착륙 시 이벤트
    window.addEventListener("keydown" , e=>{
      if(this.game_in_process){
        switch (e.keyCode) {
          case 32:
            this.current_block.press_space_bar(this);
            break;
          case 37:
            this.current_block.move_left(this.cell_info_arr);
            break;
          case 38:
              // arrow up
              this.current_block.rotation(this.cell_info_arr);
              break;
          case 39:
            this.current_block.move_right(this.cell_info_arr);
              break;
          case 40:
            this.current_block.move_down(this);
            break;
        }
      }
    })
  }
}
</script>

<style>
body{margin: 0}
#app {
  background-color: #eee;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.playground{
  font-size: 10px;
  color: #fff;

  border-spacing: 3px;
  background-color: #aaa;
  border-radius: 3px;
}

.row{

}
.col{

  width: 27px;
  height: 27px;
  line-height: 27px;
  text-align: center;
  background-color: #ccc;
  border-radius: 3px;
}
.skyblue_block{background-color: rgb(90,200,250);}
.blue_block{background-color: blue;}
.orange_block{background-color: orange;}
.yellow_block{background-color: yellow;}
.green_block{background-color: green;}
.pupple_block{background-color: purple;}
.red_block{background-color: red;}
</style>
