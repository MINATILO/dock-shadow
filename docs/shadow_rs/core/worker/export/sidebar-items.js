initSidebarItems({"fn":[["worker_borrow","If worker is alive, returns an immutable reference to it. Otherwise returns NULL. SAFETY: Returned pointer is invalid after `worker_freeForThisThread` is called or when global destructors start running."],["worker_borrowMut","If worker is alive, returns mutable reference to it. Otherwise returns NULL. SAFETY: Returned pointer is invalid after `worker_freeForThisThread` is called or when global destructors start running."],["worker_newForThisThread","Initialize a Worker for this thread."],["worker_setActiveHost",""],["worker_setActiveProcess",""],["worker_setActiveThread",""],["worker_threadID","ID of the current thread’s Worker. Panics if the thread has no Worker."],["workerref_free","Return a borrowed reference."],["workerref_raw","SAFETY: Returned pointer must not outlive `workerRef`."],["workerrefmut_free","Return a borrowed reference."],["workerrefmut_raw","SAFETY: Returned pointer must not outlive `workerRefMut`."]],"struct":[["WorkerRef","A borrowed immutable reference to the current thread’s Worker."],["WorkerRefMut","A borrowed mutable reference to the current thread’s Worker."]]});