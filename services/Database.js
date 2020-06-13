import * as SQLite from 'expo-sqlite';

export default function database() {
    return SQLite.openDatabase("DB")
}
export function createTables(db) {
    db.transaction(tx => {

        tx.executeSql(
            "create table if not exists ToDo (id integer primary key not null, key int, content text, completed bool, rank int);",
            [],
            (_, set) => {console.log("ToDo Creation SUCCESS")},
            (_, err) => {console.log("ToDo Creation FAILURE", err)}
        );

        tx.executeSql(
            "create table if not exits Settings " +
            "(id integer primary key not null, fname text, lname text, profileImage text);",
            [],
            (_, set) => {console.log("Settings Creation SUCCESS")},
            (_, err) => {console.log("Settings Table FAILURE")}
        );

        tx.executeSql(
            "create table if not exists Notes " +
            "(id integer primary key not null, " +
            "tag text, context text, feeling text, explanation text, isReflected bool, reflection text, lesson1 text, lesson2 text);",
            [],
            (_, set) => {console.log("Notes Creation SUCCESS")},
            (_, err) => {console.log("Notes Creation FAILURE", err)}
        );

        //tx.executeSql("create table if not exists Goals (;
    });
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
    insertItem: (db, text, count) => {
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
    clearAll: (db) => {
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
    },
    clearCompleted: (db) => {
        db.transaction(tx => {
                tx.executeSql(
                    "DELETE FROM ToDo WHERE completed = ?",
                    [true],
                    (_, set) => {
                        console.log("SQL clear completed success")
                    },
                    (_, err) => {
                        console.log(err)
                    }
                );
        });
    },
}

/// Notes Table
export const NotesTable = {
    show: (db) => {
        db.transaction( tx => {
            tx.executeSql(
                "select * from Notes",
                [],
                (_, set) => {console.log(set)},
                (_, err) => {console.log(err)}
            );
        })
    },
    addNote: (db, values) => {
        db.transaction( tx => {
            tx.executeSql(
                "INSERT INTO Notes (tag, context, feeling, explanation, isReflected, reflection, lesson1, lesson2)" +
                " VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                [values['tag'], values['context'], values['feeling'], values['explanation'], false, null, null, null],
                (_, set) => {console.log("insert note success")},
                (_, err) => {console.log(err)}
            );
        });
    },
    loadNotes: (db, updateNotes) => {
        db.transaction( tx => {
            tx.executeSql(
                "SELECT * FROM Notes",
                [],
                (_, set) => {
                    console.log(set.rows['_array']);
                    updateNotes(set.rows['_array']);
                },
                (_, err) => {
                console.log(err)
                }
            );

        });
    },
    clear: (db) => {
        db.transaction(
            tx => {
                tx.executeSql(
                    "DELETE FROM Notes",
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