initSidebarItems({"constant":[["CONFIG_PIPE_BUFFER_SIZE",""],["InterposeMethod_INTERPOSE_METHOD_HYBRID",""],["InterposeMethod_INTERPOSE_METHOD_PRELOAD",""],["InterposeMethod_INTERPOSE_METHOD_PTRACE",""],["QDiscMode_Q_DISC_MODE_FIFO",""],["QDiscMode_Q_DISC_MODE_ROUND_ROBIN",""],["SYSCALL_IO_BUFSIZE",""],["SchedulerPolicyType_SP_PARALLEL_HOST_SINGLE",""],["SchedulerPolicyType_SP_PARALLEL_HOST_STEAL",""],["SchedulerPolicyType_SP_PARALLEL_THREAD_PERHOST",""],["SchedulerPolicyType_SP_PARALLEL_THREAD_PERTHREAD",""],["SchedulerPolicyType_SP_PARALLEL_THREAD_SINGLE",""],["SchedulerPolicyType_SP_SERIAL_GLOBAL",""],["SysCallReturnState_SYSCALL_BLOCK",""],["SysCallReturnState_SYSCALL_DONE",""],["SysCallReturnState_SYSCALL_NATIVE",""],["_LogInfoFlags_LOG_INFO_FLAGS_NODE",""],["_LogInfoFlags_LOG_INFO_FLAGS_NONE",""],["_LogInfoFlags_LOG_INFO_FLAGS_RAM",""],["_LogInfoFlags_LOG_INFO_FLAGS_SOCKET",""],["_LogLevel_LOGLEVEL_DEBUG",""],["_LogLevel_LOGLEVEL_ERROR",""],["_LogLevel_LOGLEVEL_INFO",""],["_LogLevel_LOGLEVEL_TRACE",""],["_LogLevel_LOGLEVEL_UNSET",""],["_LogLevel_LOGLEVEL_WARNING",""],["_ProtocolType_PLOCAL",""],["_ProtocolType_PNONE",""],["_ProtocolType_PTCP",""],["_ProtocolType_PUDP",""],["_Status_STATUS_DESCRIPTOR_ACTIVE",""],["_Status_STATUS_DESCRIPTOR_CLOSED",""],["_Status_STATUS_DESCRIPTOR_READABLE",""],["_Status_STATUS_DESCRIPTOR_WRITABLE",""],["_Status_STATUS_FUTEX_WAKEUP",""],["_Status_STATUS_NONE",""],["_TriggerType_TRIGGER_DESCRIPTOR",""],["_TriggerType_TRIGGER_FUTEX",""],["_TriggerType_TRIGGER_NONE",""],["_TriggerType_TRIGGER_POSIX_FILE",""]],"fn":[["descriptor_setHandle",""],["descriptor_unref",""],["host_addApplication",""],["host_autotuneReceiveBuffer",""],["host_autotuneSendBuffer",""],["host_boot",""],["host_compare",""],["host_detachAllPlugins",""],["host_doesInterfaceExist",""],["host_freeAllApplications",""],["host_getCPU",""],["host_getConfiguredRecvBufSize",""],["host_getConfiguredSendBufSize",""],["host_getDataPath",""],["host_getDefaultAddress",""],["host_getDefaultIP",""],["host_getFutexTable",""],["host_getID",""],["host_getLogLevel",""],["host_getName",""],["host_getNativeTID",""],["host_getNewEventID",""],["host_getNewPacketID",""],["host_getNewProcessID",""],["host_getNextPacketPriority",""],["host_getRandom",""],["host_getRandomFreePort",""],["host_getTracker",""],["host_getUpstreamRouter",""],["host_isEqual",""],["host_isInterfaceAvailable",""],["host_lock",""],["host_new",""],["host_ref",""],["host_returnHandleHack",""],["host_setup",""],["host_shutdown",""],["host_unlock",""],["host_unref",""],["process_deregisterCompatDescriptor",""],["process_getMemoryManager",""],["process_getRegisteredCompatDescriptor",""],["process_parseArgStr",""],["process_parseArgStrFree",""],["process_registerCompatDescriptor",""],["statuslistener_onStatusChanged",""],["statuslistener_ref",""],["statuslistener_unref",""],["syscallcondition_new",""],["syscallcondition_unref",""],["syscallhandler_close",""],["syscallhandler_dup",""],["syscallhandler_exit_group",""],["syscallhandler_getpid",""],["syscallhandler_getppid",""],["syscallhandler_pipe",""],["syscallhandler_pipe2",""],["syscallhandler_pread64",""],["syscallhandler_pwrite64",""],["syscallhandler_read",""],["syscallhandler_set_tid_address",""],["syscallhandler_uname",""],["syscallhandler_write",""],["thread_clone",""],["thread_getHostId",""],["thread_getID",""],["thread_getIPCBlock",""],["thread_getNativePid",""],["thread_getNativeTid",""],["thread_getProcessId",""],["thread_getReturnCode",""],["thread_getShMBlock",""],["thread_getTidAddress",""],["thread_handleProcessExit",""],["thread_isLeader",""],["thread_isRunning",""],["thread_nativeSyscall",""],["thread_ref",""],["thread_resume",""],["thread_run",""],["thread_setTidAddress",""],["thread_unref",""],["worker_add_syscall_counts",""],["worker_getActiveHost",""],["worker_getActiveProcess",""],["worker_getActiveThread",""],["worker_getAffinity",""],["worker_getConfig",""],["worker_getCurrentTime",""],["worker_getDNS",""],["worker_getEmulatedTime",""],["worker_getLatency",""],["worker_getNodeBandwidthDown",""],["worker_getNodeBandwidthUp",""],["worker_getThreadID",""],["worker_getTopology",""],["worker_incrementPluginError",""],["worker_isAlive",""],["worker_isBootstrapActive",""],["worker_isFiltered",""],["worker_resolveIPToAddress",""],["worker_resolveNameToAddress",""],["worker_runEvent",""],["worker_scheduleTask",""],["worker_sendPacket",""],["worker_setActiveHost",""],["worker_setActiveProcess",""],["worker_setActiveThread",""],["worker_setCurrentTime",""],["worker_setMinEventTimeNextRound",""],["worker_setRoundEndTime",""],["worker_updateMinTimeJump",""]],"struct":[["ConfigOptions",""],["Counter",""],["MemoryManager",""],["PosixFileArc",""],["_Address",""],["_CPU",""],["_DNS",""],["_Epoll",""],["_Event",""],["_Futex",""],["_FutexTable",""],["_GTimer",""],["_Host",""],["_HostParameters",""],["_NetworkInterface",""],["_Packet",""],["_PluginVirtualPtr",""],["_Process",""],["_Random",""],["_Router",""],["_ShMemBlock",""],["_StatusListener",""],["_SysCallArgs",""],["_SysCallCondition",""],["_SysCallHandler",""],["_SysCallReturn",""],["_Task",""],["_Thread",""],["_Timer",""],["_Topology",""],["_Tracker",""],["_Transport",""],["_TransportFunctionTable",""],["_Trigger",""]],"type":[["Address","An Address structure holds information used to identify nodes, allowing for easy extraction of both integer and string forms of an IP address as well as the string hostname associated with the IP. Address is an opaque structure and should only be accessed using the functions in this class."],["CPU",""],["DNS",""],["DescriptorCloseFunc",""],["DescriptorFreeFunc",""],["EmulatedTime","Emulation time in nanoseconds. Allows for a consistent representation of time throughput the simulator. Emulation time is the simulation time plus the EMULATION_TIME_OFFSET. This type allows us to explicitly distinguish each type of time in the code.,"],["Epoll",""],["Event",""],["Futex",""],["FutexTable",""],["GQuark",""],["GTimer",""],["Host",""],["HostParameters",""],["InterposeMethod",""],["LegacyDescriptor",""],["NetworkInterface",""],["Packet",""],["PluginPtr",""],["PluginVirtualPtr",""],["Process",""],["QDiscMode",""],["Random","An opaque structure representing a random source."],["Router",""],["SchedulerPolicyType",""],["ShMemBlock",""],["SimulationTime","Simulation time in nanoseconds. Allows for a consistent representation of time throughput the simulator."],["StatusListener",""],["SysCallArgs",""],["SysCallCondition",""],["SysCallHandler",""],["SysCallReg",""],["SysCallReturn",""],["SysCallReturnState",""],["Task",""],["Thread",""],["Timer",""],["Topology",""],["Tracker",""],["Transport",""],["TransportFunctionTable",""],["TransportReceiveFunc",""],["TransportSendFunc",""],["Trigger",""],["TriggerObject",""],["_LogInfoFlags",""],["_LogLevel",""],["_ProtocolType",""],["_Status",""],["_TriggerType",""],["__int64_t",""],["__pid_t",""],["__uint16_t",""],["__uint32_t",""],["__uint64_t",""],["gboolean",""],["gchar",""],["gconstpointer",""],["gdouble",""],["gint",""],["gpointer",""],["gsize",""],["gssize",""],["guint",""],["guint32",""],["guint64",""],["in_addr_t",""],["in_port_t",""],["pid_t",""],["sa_family_t",""],["size_t",""]],"union":[["_SysCallReg",""],["_TriggerObject",""]]});