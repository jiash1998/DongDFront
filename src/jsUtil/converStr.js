let yes = true;
let no = false;

export default {
  conversion(val) {
    if (yes + "" === val) {
      return yes;
    }
    return no;
  },
};
