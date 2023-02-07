import {ref} from "@vue/reactivity"


const colorPicker = () => {
    const colors = ref(["green" ,"red", "blue" ,"purple"])
    const message = ref("Pick a color...")


    const matchColor = (value) => {
        
        const randomIndex = Math.floor(Math.random() * 3) + 1;
  
        if (colors[randomNumber] === value) {
          message.value = `You win... [answer: ${colors.value[randomIndex]}]`;
      return;
        }
  
        message.value = `You loose [answer: ${colors.value[randomIndex]}]`;
      };
  
      return { colors, message, matchColor };
    }

    export default colorPicker;
