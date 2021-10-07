
import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
 const [isAddModal, setIsAddModal] = useState(false)

   
  const addEnteredGoal = (goalEntered) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalEntered },
    ]);

    setIsAddModal(false)
  };

  const removeGoal = (goalId) =>{ 
      setCourseGoals(currentGoals=>{
       return currentGoals.filter((goal) => goal.id !== goalId)
      })
  }

  const onCancel =() =>{
    setIsAddModal(false)
  }

  return (
    <View style={styles.screen}>
    <Button title= "Add Goal" onPress={() => setIsAddModal(true)}/>
     <GoalInput visible={isAddModal} onAddGoal={addEnteredGoal} cancel={onCancel}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(items) => (
         <GoalItem
           text= {items.item.value}
           id= {items.item.id}
           delete ={removeGoal}
         />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
 

});
