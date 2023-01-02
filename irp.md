

$I$ be the set of industrial gas distribution plants
$C$ be the set of customers
$G$ be the set of gas types
$V$ be the set of vehicles
$a_{i,j}$ be the distance between plant $i$ and customer $j$
$s_{i,g}$ be the inventory level of gas type $g$ at plant $i$
$d_{j,g}$ be the demand for gas type $g$ at customer $j$
$Q_v$ be the capacity of vehicle $v$
$t_v$ be the time required for vehicle $v$ to travel from one location to another
$f_{i,g}$ be the cost of producing one unit of gas type $g$ at plant $i$
$h_{i,g}$ be the holding cost per unit of gas type $g$ at plant $i$ per unit of time
$k_{v,g}$ be the transportation cost per unit of gas type $g$ on vehicle $v$
The goal is to find the optimal assignment of vehicles to routes and the optimal amount of gas to produce and transport in order to minimize the total cost. This can be formulated as the following mixed integer linear program:

\begin{align*}
\text{minimize} \quad & \sum_{i \in I} \sum_{g \in G} f_{i,g} x_{i,g} + \sum_{i \in I} \sum_{g \in G} h_{i,g} y_{i,g} + \sum_{(i,j) \in R} \sum_{g \in G} k_{v,g} z_{i,j,g,v} \
\text{subject to} \quad & \sum_{g \in G} x_{i,g} - \sum_{g \in G} y_{i,g} + \sum_{j \in C} \sum_{v \in V} z_{i,j,g,v} = d_{j,g} & \forall j \in C, g \in G \
& \sum_{g \in G} z_{i,j,g,v} \le Q_v & \forall (i,j) \in R, v \in V \
& y_{i,g} \ge 0 & \forall i \in I, g \in G \
& x_{i,g} \ge y_{i,g} & \forall i \in I, g \in G \
& z_{i,j,g,v} \ge 0 & \forall (i,j) \in R, g \in G, v \in V \
& t_v d_{j,g} \le \text{travel time} & \forall (i,j) \in R, g \in G, v \in V \
& x_{i,g}, y_{i,g} \in \mathbb{Z}^+, z_{i,j,g,v} \in \mathbb{R}^+
\end{align*}

In this formulation, the variables are:

$x_{i,g}$: the amount of gas type $g$ produced
