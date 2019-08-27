import AchievesService from '../../services/AchievesService';


function loadAchieves() {
  return async (dispatch) => {
    const achieves = await AchievesService.getAchieves();
    if(achieves){
      dispatch({ type: 'setAchieves', payload: achieves })
    }
  }
}

export default {
  loadAchieves,
}