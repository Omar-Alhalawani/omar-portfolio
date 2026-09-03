export const SECTORS = [
  { id: 0, name: 'BOOT SECTOR', objective: 'Restore the maintenance relay', enemy: 'bitworm', count: 5, puzzle: 'routing', story: 'VERA-7 online. The maintenance network has lost contact.' },
  { id: 1, name: 'CONTROL GRID', objective: 'Rebuild the state controller', enemy: 'watchdog', count: 7, puzzle: 'logic', boss: 'STATE MACHINE', story: 'Control transitions are looping without a legal exit.' },
  { id: 2, name: 'MEMORY VAULT', objective: 'Stabilize the register banks', enemy: 'bitworm', count: 9, puzzle: 'memory', boss: 'STACK OVERFLOW', story: 'Corruption is rewriting the map from inside the memory cells.' },
  { id: 3, name: 'CLOCKWORK', objective: 'Restore clock distribution', enemy: 'race', count: 10, puzzle: 'timing', boss: 'METASTABILITY', story: 'Every path is moving, but none agree on when.' },
  { id: 4, name: 'BUS NEXUS', objective: 'Clear the interconnect', enemy: 'deadlock', count: 11, puzzle: 'handshake', boss: 'BUS CONTENTION', story: 'The buses are jammed. Nothing moves until something yields.' },
  { id: 5, name: 'UNKNOWN DEPTHS', objective: 'Trace the X propagation source', enemy: 'phantom', count: 12, puzzle: 'reference', boss: 'X//X//X', story: 'Undefined behavior detected. Literally.' },
  { id: 6, name: 'VERIFICATION LAB', objective: 'Reconnect the scoreboard', enemy: 'glitcher', count: 13, puzzle: 'logic', boss: 'COVERAGE GAP', story: 'The monitors are still watching. They just cannot agree on reality.' },
  { id: 7, name: 'REGRESSION CORE', objective: 'Contain the regression cascade', enemy: 'watchdog', count: 15, puzzle: 'routing', boss: 'ASSERTION FAILURE', story: 'Regression complexity increasing. Keep the network alive.' },
  { id: 8, name: 'SILICON GATE', objective: 'Defeat NULL and clear tapeout', enemy: 'phantom', count: 16, puzzle: 'final', boss: 'NULL', story: 'No test can fail if no test is allowed to observe failure.' }
];

export const SAVE_KEY = 'faultHuntTapeoutSave';
