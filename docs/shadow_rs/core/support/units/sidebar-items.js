initSidebarItems({"enum":[["SiPrefix","Common SI prefixes (including base-2 prefixes since they're similar)."],["SiPrefixUpper","Common SI prefixes larger than the base unit (including base-2 prefixes since they're similar)."],["TimePrefix","Time units, which we pretend are prefixes for implementation simplicity. These contain both the prefix (\"n\", \"u\", \"m\") and the suffix (\"sec\", \"min\", \"hr\") and should be used with the [`Time`] unit."],["TimePrefixUpper","Time units larger than the base unit, which we pretend are prefixes for implementation simplicity. These really contain the unit suffix (\"sec\", \"min\", \"hr\") and should be used with the [`Time`] unit."]],"mod":[["export",""]],"struct":[["BitsPerSec","A throughput in bits-per-second."],["Bytes","A number of bytes."],["Time","An amount of time. Should only use the time prefix types ([`TimePrefix`] and [`TimePrefixUpper`]) with this type."]],"trait":[["Prefix","The prefix of a unit value denoting magnitude. Common prefixes are SI prefixes (nano, micro, milli, etc)."],["Unit","A unit containing a value (ex: an integer), a prefix (ex: an enum), and allowed constant suffix strings."]]});