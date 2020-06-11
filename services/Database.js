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
                    console.log("SQL markcompleted SUCCESS")
                },
                (_, err) => {
                    console.log(err)
                }
            )
        })
    },
    insertItem: (db, text, count, setToDo) => {
        db.transaction(
            tx => {
                tx.executeSql(
                    "INSERT INTO ToDo (key, content, completed, rank) VALUES (?, ?, ?, ?)",
                    [count, text, false, count],
                    (_, set) => {
                        console.log("SQL insert item success");
                    },
                    (_, err) => {
                        console.log(err)
                    }
                );
            },
            (err) => {console.log(err)},
            () => {console.log("insert SUCCESS")}
        )
    },
    loadList: (db, setToDo) => {
        db.transaction(
            tx => {
                tx.executeSql(
                    "SELECT key, content, rank, completed FROM ToDo ORDER BY rank",
                    [],
                    (_, set) => {
                        setToDo(set.rows['_array'])
                    },
                    (_, err) => {
                        console.log(err)
                    }
                );
            },
            (_) => {
                console.log(err)
            },
            () => {
                console.log("INIT LIST SUCCESS")
            }
        )
    },
    clear: (db) => {
        db.transaction(
            tx => {
                tx.executeSql(
                    "DELETE FROM ToDo",
                    [],
                    (_, set) => {
                        console.log("SQL delete from table success")
                    },
                    (_, err) => {
                        console.log(err)
                    }
                );
            },
            (err) => {console.log(err)},
            () => {console.log("CLEAR TABLE SUCCESS")}
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
    clear: (db) => {
        db.transaction(
            tx => {
                tx.executeSql(
                    "DELETE FROM ToDo",
                    [],
                    (_, set) => {
                        console.log("SQL delete from table success")
                    },
                    (_, err) => {
                        console.log(err)
                    }
                );
            },
            (err) => {console.log(err)},
            () => {console.log("CLEAR TABLE SUCCESS")}
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
    clear: (db) => {
        db.transaction(
            tx => {
                tx.executeSql(
                    "DELETE FROM ToDo",
                    [],
                    (_, set) => {
                        console.log("SQL delete from table success")
                    },
                    (_, err) => {
                        console.log(err)
                    }
                );
            },
            (err) => {console.log(err)},
            () => {console.log("CLEAR TABLE SUCCESS")}
        )
    }
}

export const SettingsTable = {
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
    clear: (db) => {
        db.transaction(
            tx => {
                tx.executeSql(
                    "DELETE FROM ToDo",
                    [],
                    (_, set) => {
                        console.log("SQL delete from table success")
                    },
                    (_, err) => {
                        console.log(err)
                    }
                );
            },
            (err) => {console.log(err)},
            () => {console.log("CLEAR TABLE SUCCESS")}
        )
    }
}