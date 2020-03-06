// CPCS 324 Algorithms & Data Structures 2
// Graph data structure starter - Transitive Closure Package
// 2019, Dr. Muhammad Al-Hashimi

// -----------------------------------------------------------------------
// simple graph object with linked-list edge implementation and minimal fields
// extra vertex and edge member fields and methods to be added later as needed
//


var _v = [], _e = [];   // note naming conventions in upload guide


// -----------------------------------------------------------------------
function _main()   
{
        
}


// -----------------------------------------------------------------------

function Vertex(v)
{
	// published docs section (ref. assignment page)
	// for this section, strip line comments
	// no JSDOC comments in this section
	
	// base property fields from P1M1
	
	this.label = v.label;  // ... complete from P1M1 (remove comment)

	
	// base member methods from P1M1

		
	// --------------------
	// more student fields next
	
	
	// --------------------
	// more student methods next
	
}

// -----------------------------------------------------------------------

function Edge(vert_i,weight)
{
	// published docs section (ref. assignment page)
	// for this section, strip line comments
	// no JSDOC comments in this section

	
	// base property fields
	
	this.target_v = vert_i;  // ... complete from P1M1 (remove comment)

	
	// base member methods
	

	// --------------------
	// more student fields next
	
	
	// --------------------
	// more student methods next

}


// -----------------------------------------------------------------------

function Graph()
{
	// published docs section (ref. assignment page)
	// for this section, strip line comments
	// no JSDOC comments in this section
	
	
	// base property fields

	this.vert = [];
	this.nv = 0;  // ... etc. from P1M1 (remove)
	

	// base member methods
	
	this.read_graph = better_input;  // ... (complete next)
	
	
	// --------------------
	// more student fields next
	
	
	// --------------------
	// more student methods next 

	// transitive closure package (requirements in line comments, to be removed and replaced by JSDOCs) 
	
	this.hasPath                   // boolean, true if path exists between vertices v_i, v_j in digraph
	this.shortestPath              // return distance of shortest path between v_i, v_j in weighted graph 
	this.isDAG                     // boolean, true if acyclic digraph
	this.warshallFloyd             // inserts .tc field in adjacency matrix if digraph, and .dist if weighted
	this.dfsTC                     // return TC matrix for digraph based on a dfs
		

}


// -----------------------------------------------------------------------
// functions used by methods of Graph and ancillary objects

// -----------------------------------------------------------------------
// begin student code section
// -----------------------------------------------------------------------

// transitive closure package 

function hasPathImpl()
{

}


// -----------------------------------------------------------------------
// published docs section (ref. assignment page)
// use starter6-based P1M1 code as-is (fixes/improvements OK)
// no JSDOC comments in this section (docs already published)
// -----------------------------------------------------------------------

function list_vert()
{

}   // etc.



