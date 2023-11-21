import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const TodoListScreen = () =>
{
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const addTask = () =>
    {
        if (task.trim() !== '')
        {
            setTasks([...tasks, { id: Date.now().toString(), text: task }]);
            setTask('');
        }
    };

    const deleteTask = (taskId) =>
    {
        const updatedTasks = tasks.filter((item) => item.id !== taskId);
        setTasks(updatedTasks);
    };

    const renderTask = ({ item }) => (
        <View style={styles.taskContainer}>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ajouter une tâche"
                value={task}
                onChangeText={(text) => setTask(text)}
            />
            <Button title="Ajouter" onPress={addTask} />
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={renderTask}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 8,
        paddingHorizontal: 8,
    },
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    deleteButton: {
        color: 'red',
    },
});

export default TodoListScreen;
