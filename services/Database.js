import * as SQLite from 'expo-sqlite';

export default function database() {
    return SQLite.openDatabase("DB")
}

/// ToDo Table
export const ToDoTable = {
    show: (db) => {
        db.transaction( tx => {
            tx.executeSql(
                "select * from ToDo",
                [],
                (_, set) => {console.log(set)},
                (_, err) => {console.log(err)}
            );
        })
    },
    markComplete: (db, key) => {
        db.transaction(tx => {
            tx.executeSql(
                "UPDATE ToDo SET completed = ? WHERE key = ?",
                [true, key],
                (_, set) => {
                    console.log("SUCCESS")
                },
                (_, err) => {
                    console.log(err)
                }
            )
        })
    },
    insertItem: (db, text, count) => {
        db.transaction(
            tx => {
                tx.executeSql(
                    "INSERT INTO ToDo (key, content, completed, rank) VALUES (?, ?, ?, ?)",
                    [count, false, count],
                    (_, set) => {
                        console.log("SUCCESS")
                    },
                    (_, err) => {
                        console.log(err)
                    }

                );
            },
            (err) => {console.log(err)},
            () => {console.log("SUCCESS")}
        )
    }
}

/// Notes Table
export const NotesTable = {
    show: (db) => {
        db.transaction( tx => {
            tx.executeSql(
                "select * from ToDo",
                [],
                (_, set) => {console.log(set)},
                (_, err) => {console.log(err)}
            );
        })
    },
    markComplete: (db, key) => {
        db.transaction(tx => {
            tx.executeSql(
                "UPDATE ToDo SET completed = ? WHERE key = ?",
                [true, key],
                (_, set) => {
                    console.log("SUCCESS")
                },
                (_, err) => {
                    console.log(err)
                }
            )
        })
    },
    insertItem: (db, text, count) => {
        db.transaction(
            tx => {
                tx.executeSql(
                    "INSERT INTO ToDo (key, content, completed, rank) VALUES (?, ?, ?, ?)",
                    [toDoCount++, false, toDoCount],
                    null,
                    null
                );
            },
            (err) => {console.log(err)},
            () => {console.log("SUCCESS")}
        )
    }
}

/// Goals Table
export const GoalsTable = {
    show: (db) => {
        db.transaction( tx => {
            tx.executeSql(
                "select * from ToDo",
                [],
                (_, set) => {console.log(set)},
                (_, err) => {console.log(err)}
            );
        })
    },
    markComplete: (db, key) => {
        db.transaction(tx => {
            tx.executeSql(
                "UPDATE ToDo SET completed = ? WHERE key = ?",
                [true, key],
                (_, set) => {
                    console.log("SUCCESS")
                },
                (_, err) => {
                    console.log(err)
                }
            )
        })
    },
    insertItem: (db, text, count) => {
        db.transaction(
            tx => {
                tx.executeSql(
                    "INSERT INTO ToDo (key, content, completed, rank) VALUES (?, ?, ?, ?)",
                    [toDoCount++, false, toDoCount],
                    null,
                    null
                );
            },
            (err) => {console.log(err)},
            () => {console.log("SUCCESS")}
        )
    }
}