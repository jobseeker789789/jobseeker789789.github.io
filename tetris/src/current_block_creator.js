import App from './App.vue';

class something_class {
    constructor(){
      this.block_type = 0;
      this.locations = [
      {x: 3, y: 0},
      {x: 4, y: 0},
      {x: 5, y: 0},
      {x: 6, y: 0}
      ]
    }
    move_left(){
      console.log(App.data())

      if(0 < this.locations[0].x
      && 0 < this.locations[1].x
      && 0 < this.locations[2].x
      && 0 < this.locations[3].x
      ){
        this.locations[0].x--;
        this.locations[1].x--;
        this.locations[2].x--;
        this.locations[3].x--;
      }
    }
    move_right(){
      if(this.locations[0].x < 9
      && this.locations[1].x < 9
      && this.locations[2].x < 9
      && this.locations[3].x < 9
      ){
        this.locations[0].x++;
        this.locations[1].x++;
        this.locations[2].x++;
        this.locations[3].x++;
      }
    }
    move_down(){
      console.log(App.data());

      // y가 19 미만이면 한 칸 내리기
      // 더 이상 내려 갈 수 없으면 ...
      if(this.locations[0].y == 19
      || this.locations[1].y == 19
      || this.locations[2].y == 19
      || this.locations[3].y == 19
      ){
        // 바닥과 닿아서 종료
        App.methods.block_embedding();  
        App.methods.reset_current_block();
        return false
      }else{
        // 마지막 칸이 아니라면 한 칸 내려주기
        this.locations[0].y++;
        this.locations[1].y++;
        this.locations[2].y++;
        this.locations[3].y++;

        if(App.data().locations_of_cell_table[this.locations[0].y][this.locations[0].x].blocked
        || App.data().locations_of_cell_table[this.locations[1].y][this.locations[1].x].blocked
        || App.data().locations_of_cell_table[this.locations[2].y][this.locations[2].x].blocked
        || App.data().locations_of_cell_table[this.locations[3].y][this.locations[3].x].blocked
        ){  
          // 다른 블록과 닿아서 종료
          this.locations[0].y--;
          this.locations[1].y--;
          this.locations[2].y--;
          this.locations[3].y--;

          App.methods.block_embedding();  
          App.methods.reset_current_block();

          return false
        }
      }
      return true
    }
  }

  export default something_class;