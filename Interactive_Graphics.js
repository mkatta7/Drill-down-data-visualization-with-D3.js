<!DOCTYPE html>
<html>
<head>
<title>D3 Visualization</title>
</head>
<body>
<a name="Report1"></a>
<h1>Interactive Graphics using D3 </h1>
<h4> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMohan Kumar Katta <br> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspS6295528 </h4>

<ul> 
    <li> <a href="#Report"> D3 Visualization using Pie Chart </a> </li>
</ul>
<p> Three phases are implemented in the visualization process.</p>
<p> 
    <ol>
    
        <li>Getting the data. </li>
        <li>Manipulating the data</li>
        <li>Visualizing the data.</li>
    
    </ol> 
    </a>
</p>
<p> 
<ol> <li><h3>	Getting the data :</h3></li>
There are two data sets provided, One dataset (attendance_with_gender_age) has got all the attributes in which we need only age and in the other dataset (att_module_results) has student ID, Module code, AC year, mark and grade. The size of the datasets are different and have merged both the data sets taking student ID as the common attribute in which the age of the student and grade of the student attained has been assigned to the student ID.
After merging the datasets, all the rows having null values have been deleted and the dataset obtained has the other attributes in which we are not interested in, so all the columns have been dropped using python.  Now the age, grade and the postal code attributes are taken in consideration
<li><h3>	Manipulating the data: </h3></li>
With the three attributes, the relationship between the attributes need to be found out. For finding out the relationship, correlation is found and using heatmap from seaborn, a correlation matrix is visualized. I found that there is no correlation between the (age, grade ) and postal area. So I have dropped the postal area column in which there are more than 700 postal codes.
After dropping the postal area column, Age and grade columns have been taken into consideration. Using the counts function, I have taken out the figure on how many students attaining different grades. I have converted into a data frame and then converted into json file in which the visualization can be done.
<li><h3>	Visualizing the data:</h3></li>
I have chosen Pie chart with drill down as the option as the visualization would be better to understand on a click event.
 The Visualization of Pie chart in d3 shows the data of 10 grades with each having their total number of students obtaining, on drilling down, each grade is represented by the age group having their total obtaining that particular grade. The ten grades are represented by each different colour and on drilling down Ordinal scale is used. 
The visualization consists of legends in which each colour is represented by their grade and on clicking on the legends, an event is fired, and the colour is dimmed on the arc. On hovering on any arc, the title is shown in the tool tip and the arc is projected out.
Drilling down is available, Ex. Which grade is attained high and when clicking on it, the age groups attaining that grade will be shown with the number on the tooltip. When it is clicked on the arc, the age groups attaining the grades along with number and on clicking back, it will return back.

</ol>
<ul>
<h4>Implementing the visualization in 3 phases</h4>
<li>  Simple pie chart </li>
<li>	Small events like pop out, hover event </li>
<li>	Drill down </li>
<li>	<h5>Simple pie chart:</h5> </li>
Plot function is called, in it firstly, Transform the data and secondly pie chart is built.
The data is taken from a json file which is extracted after doing some manipulation to show in pie chart. Chart Data array has different objects. 1. grade,2. age group and 3.their total.
Option values i.e settings like which colour have to show for each of the grades, the colour coding for different grades.
1st array, These captions will show in the legend and 2nd array is colour coding is given to the grades
X axis is ordinal scale is used and grade is taken and Y axis is the secondary scale, taking total attribute in which the area of the arc is distributed.

                     Transform the data into the form we need. The data into the form we need, a function is        needed. 1st object for age group1 and etc, the sum of a certain grade is taken. Function to transform data, looping around the data objects we have, summing all the required values and returning a simple array as running data and simple colours as running colours. ex. In running data index 0,data for grade a and running colours colour for index 0 for colour.
Transforming data and building a pie: For building pie chart, more references are taken, Inner container for containing for chart. Positioning the chart is taken, height, width and etc were defined in div. Chart object is defined, innercont is passed .X and y variable names are declared. Width and height are defined. Variable for colours are defined, ordinal scale for colours, and running colours has array and is passed. Arc is defined through d3.svg.arc function, inner radius is taken as 0 as it is a pie chart and outer radius is defined with a value, Svg element is appended into the chart and setting of width and height variables are taken. Variable pie, which will use pie function, area of the pie is defined with respect to the total. Ex. If grade a is larger, area will be larger. Binding chart to data to arc object, running data will return to pie. Path variable, setting ids for particular arc, opacity is used. Tooltip is defined svg.title. Fill function to fill the arc and chart. All the necessary objects are defined and filled.
       	 Building of legends: Legends with the same colour of the arc that is being represented. Variable legend,  a loop is written, Position for legend is defined, cursor style is pointer, rectangle for legend, text and tool tip for legends.

<li> <h5>	Small events like pop out, hover event:</h5></li>
Binding the data with events. Hover event, hovering of the mouse on the arc, it will pop out. Click event, clicking, related  arc will pop out and opacity of the arc will change. Binding of hover event, Outer radius and inner radius are encased. New arc event which have required radius. Hover event= stroke is white, transition duration is 200 msec and arc over will revert back to arc and the pop out is taken. Clicking on legend, arc should pop out and opacity must increase. Click event, arc is changed to arc over, and opacity is 0.3. Set time out and it returns to its original form. Other events can be appended.
<li>	<h5>Implementing Drill down:</h5></li>
Drill down the data of the particular arc to the next level. How we can provide drill down facilities:  Binding click event, setting the filter as grade. Including level parameter in both functions. If level is 0, adding the total number of people attaining the grade and ignores the age groups. When level is 1(drill down), it adds the age groups and applies filter i.e the number of age groups. Appling the click event, which will handle level o or level 1mouse enter and mouse leave. Level=1, transforming the data, passing the grade nas filter and called build pie and passing level as 0, 
</ul>
<table> 

    <tr> 
        <th> Age group</th>
        <th>        &nbspGradeA        </th> 
        <th>        &nbspGradeB        </th> 
        <th>        &nbspGradeC        </th> 
        <th>        &nbspGradeD        </th> 
        <th>        &nbspGradeDA       </th>
        <th>        &nbspGradeF        </th>
        <th>        &nbspGradeFS       </th>
        <th>        &nbspGradePL       </th>
        <th>        &nbspGradeWD       </th>
        <th>        &nbspGradeWS       </th>
    </tr>
    <tr> 
        <th> 18-24 </th>
        <td>&nbsp&nbsp1402</td>
        <td>&nbsp&nbsp1212</td>
        <td>&nbsp&nbsp775</td>
        <td>&nbsp&nbsp236</td>
        <td>&nbsp&nbsp&nbsp&nbsp38</td>
        <td>&nbsp&nbsp394</td>
        <td>&nbsp&nbsp&nbsp&nbsp04</td>
        <td>&nbsp&nbsp&nbsp&nbsp16</td>
        <td>&nbsp&nbsp&nbsp&nbsp92</td>
        <td>&nbsp&nbsp&nbsp&nbsp43</td>

    </tr>
    <tr> 
            <th> 25-30 </th>
            <td>&nbsp&nbsp&nbsp40</td>
            <td>&nbsp&nbsp&nbsp48</td>
            <td>&nbsp&nbsp&nbsp30</td>
            <td>&nbsp&nbsp&nbsp18</td>
            <td>&nbsp&nbsp&nbsp&nbsp00</td>
            <td>&nbsp&nbsp&nbsp16</td>
            <td>&nbsp&nbsp&nbsp&nbsp00</td>
            <td>&nbsp&nbsp&nbsp&nbsp00</td>
            <td>&nbsp&nbsp&nbsp&nbsp03</td>
            <td>&nbsp&nbsp&nbsp&nbsp00</td>
    
    </tr>
    <tr> 
            <th> 31-40 </th>
            <td>&nbsp&nbsp&nbsp87</td>
            <td>&nbsp&nbsp&nbsp72</td>
            <td>&nbsp&nbsp&nbsp58</td>
            <td>&nbsp&nbsp&nbsp28</td>
            <td>&nbsp&nbsp&nbsp&nbsp04</td>
            <td>&nbsp&nbsp&nbsp29</td>
            <td>&nbsp&nbsp&nbsp&nbsp00</td>
            <td>&nbsp&nbsp&nbsp&nbsp00</td>
            <td>&nbsp&nbsp&nbsp&nbsp10</td>
            <td>&nbsp&nbsp&nbsp&nbsp00</td>
        
    </tr>
    <tr> 
            <th> 41-50 </th>
            <td>&nbsp&nbsp&nbsp154</td>
            <td>&nbsp&nbsp&nbsp136</td>
            <td>&nbsp&nbsp&nbsp77</td>
            <td>&nbsp&nbsp&nbsp47</td>
            <td>&nbsp&nbsp&nbsp&nbsp05</td>
            <td>&nbsp&nbsp&nbsp62</td>
            <td>&nbsp&nbsp&nbsp&nbsp00</td>
            <td>&nbsp&nbsp&nbsp&nbsp00</td>
            <td>&nbsp&nbsp&nbsp&nbsp10</td>
            <td>&nbsp&nbsp&nbsp&nbsp00</td>
    
    </tr>
    <tr> 
            <th> 51&above </th>
            <td>&nbsp&nbsp&nbsp292</td>
            <td>&nbsp&nbsp&nbsp286</td>
            <td>&nbsp&nbsp&nbsp179</td>
            <td>&nbsp&nbsp&nbsp69</td>
            <td>&nbsp&nbsp&nbsp&nbsp11</td>
            <td>&nbsp&nbsp&nbsp135</td>
            <td>&nbsp&nbsp&nbsp&nbsp01</td>
            <td>&nbsp&nbsp&nbsp&nbsp03</td>
            <td>&nbsp&nbsp&nbsp&nbsp26</td>
            <td>&nbsp&nbsp&nbsp&nbsp06</td>
        
    </tr>
</table> 
<p><h3>Conclusion:</h3>
To have a clear understanding, the age of the students has been divided as groups. Age group 1 is between 18-24 is taken as undergraduate group, Age group 2,25-30 is taken as Graduate group, Age groups 31-40,41-50 and 51 and above as different studies.
From all the age groups, Group 1, Students of age between 18-24 are highest in number. So, the all the grades attained by this group is also the highest. 
Highest grades are attained by Age group 18-24,followed by 51 and above age group. The least number of students attained highest grades are from age group 25-30.
</p>

</p>

<a name="Report"></a>

<li> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<a href="#Report1"> Back to top </a> </li>
        
        <style type="text/css">
            #chart text {
                fill: black;
                font: 10px sans-serif;
                text-anchor: end;
            }
            

            .axis text {
                font: 10px sans-serif;
            }

            .axis path, .axis line {
                fill: none;
                /*stroke: #fff;*/
                shape-rendering: crispEdges;
            }

            body {
                /*background: #1a1a1a;*/
                color: #eaeaeaea;
                padding: 10px;
            }

            path {
                stroke: steelblue;
                stroke-width: 2;
                fill: none;
            }
        </style>
        <div id="chart" style="height:600px;width:600px">
            <div class="innerCont" style="overflow: auto; top:100px; left: 400px; height:91% ; Width:100% ;position: relative;overflow: hidden;" />
        </div>
        <script src="https://code.jquery.com/jquery-1.12.4.min.js" charset="utf-8"></script>
        <script src="https://d3js.org/d3.v2.min.js"></script>
        <script type="text/javascript">
            var AttendanceData;
            var chartInnerDiv = '<div class="innerCont" style="overflow: auto;top:100px; left: 400px; height:91% ; Width:100% ;position: relative;overflow: hidden;"/>';
            var truncLengh = 30;

            $(document).ready(function () {
                Plot();
            });

            function Plot() {
                TransformChartData(chartData, chartOptions, 0);
                BuildPie("chart", chartData, chartOptions, 0)
            }

            function BuildPie(id, chartData, options, level) {
                var xVarName;
                var divisionRatio = 2.5;
                var legendoffset = (level == 0) ? 0 : -40;

                d3.selectAll("#" + id + " .innerCont").remove();
                $("#" + id).append(chartInnerDiv);
                chart = d3.select("#" + id + " .innerCont");

                var yVarName = options[0].yaxis;
                width = $(chart[0]).outerWidth(),
                height = $(chart[0]).outerHeight(),
                radius = Math.min(width, height) / divisionRatio;

                if (level == 1) {
                    xVarName = options[0].xaxisl1;
                }
                else {
                    xVarName = options[0].xaxis;
                }

                var rcolor = d3.scale.ordinal().range(runningColors);

                arc = d3.svg.arc()
                        .outerRadius(radius)
                        .innerRadius(radius - 200);

                var arcOver = d3.svg.arc().outerRadius(radius + 20).innerRadius(radius - 180);

                chart = chart
                        .append("svg")  //append svg element inside #chart
                        .attr("width", width)    //set width
                        .attr("height", height)  //set height
                        .append("g")
                        .attr("transform", "translate(" + (width / divisionRatio) + "," + ((height / divisionRatio) + 30) + ")");

                var pie = d3.layout.pie()
                            .sort(null)
                            .value(function (d) {
                                return d.Total;
                            });

                var g = chart.selectAll(".arc")
                            .data(pie(runningData))
                            .enter().append("g")
                            .attr("class", "arc");

                var count = 0;

                var path = g.append("path")
                            .attr("d", arc)
                            .attr("id", function (d) { return "arc-" + (count++); })
                            .style("opacity", function (d) {
                                return d.data["op"];
                            });

                path.on("mouseenter", function (d) {
                    d3.select(this)
                        .attr("stroke", "white")
                        .transition()
                        .duration(200)
                        .attr("d", arcOver)
                        .attr("stroke-width", 1);
                })
                .on("mouseleave", function (d) {
                    d3.select(this).transition()
                        .duration(200)
                        .attr("d", arc)
                        .attr("stroke", "none");
                })
                .on("click", function (d) {
                    if (this._listenToEvents) {
                        // Reset inmediatelly
                        d3.select(this).attr("transform", "translate(0,0)")
                        // Change level on click if no transition has started
                        path.each(function () {
                            this._listenToEvents = false;
                        });
                    }
                    d3.selectAll("#" + id + " svg").remove();
                    if (level == 1) {
                        TransformChartData(chartData, options, 0, d.data[xVarName]);
                        BuildPie(id, chartData, options, 0);
                    }
                    else {
                        var nonSortedChart = chartData.sort(function (a, b) {
                            return parseFloat(b[options[0].yaxis]) - parseFloat(a[options[0].yaxis]);
                        });
                        TransformChartData(nonSortedChart, options, 1, d.data[xVarName]);
                        BuildPie(id, nonSortedChart, options, 1);
                    }

                });

                path.append("svg:title")
                .text(function (d) {
                    return d.data["title"] + " (" + d.data[yVarName] + ")";
                });

                path.style("fill", function (d) {
                    return rcolor(d.data[xVarName]);
                })
                .transition().duration(1000).attrTween("d", tweenIn).each("end", function () {
                    this._listenToEvents = true;
                });


                g.append("text")
                .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
                .attr("dy", ".35em")
                .style("text-anchor", "middle")
                .style("opacity", 1)
                .text(function (d) {
                    return d.data[yVarName];
                });

                count = 0;
                var legend = chart.selectAll(".legend")
                    .data(runningData).enter()
                    .append("g").attr("class", "legend")
                    .attr("legend-id", function (d) {
                        return count++;
                    })
                    .attr("transform", function (d, i) {
                        return "translate(15," + (parseInt("-" + (runningData.length * 10)) + i * 28 + legendoffset) + ")";
                    })
                    .style("cursor", "pointer")
                    .on("click", function () {
                        var oarc = d3.select("#" + id + " #arc-" + $(this).attr("legend-id"));
                        oarc.style("opacity", 0.3)
                        .attr("stroke", "white")
                        .transition()
                        .duration(200)
                        .attr("d", arcOver)
                        .attr("stroke-width", 1);
                        setTimeout(function () {
                            oarc.style("opacity", function (d) {
                                return d.data["op"];
                            })
                        .attr("d", arc)
                        .transition()
                        .duration(200)
                        .attr("stroke", "none");
                        }, 1000);
                    });

                var leg = legend.append("rect");

                leg.attr("x", width / 2)
                    .attr("width", 18).attr("height", 18)
                    .style("fill", function (d) {
                        return rcolor(d[yVarName]);
                    })
                    .style("opacity", function (d) {
                        return d["op"];
                    });
                legend.append("text").attr("x", (width / 2) - 5)
                    .attr("y", 9).attr("dy", ".35em")
                    .style("text-anchor", "end").text(function (d) {
                        return d.caption;
                    });

                leg.append("svg:title")
                .text(function (d) {
                    return d["title"] + " (" + d[yVarName] + ")";
                });

                function tweenOut(data) {
                    data.startAngle = data.endAngle = (2 * Math.PI);
                    var interpolation = d3.interpolate(this._current, data);
                    this._current = interpolation(0);
                    return function (t) {
                        return arc(interpolation(t));
                    };
                }

                function tweenIn(data) {
                    var interpolation = d3.interpolate({ startAngle: 0, endAngle: 0 }, data);
                    this._current = interpolation(0);
                    return function (t) {
                        return arc(interpolation(t));
                    };
                }

            }

            function TransformChartData(chartData, opts, level, filter) {
                var result = [];
                var resultColors = [];
                var counter = 0;
                var hasMatch;
                var xVarName;
                var yVarName = opts[0].yaxis;

                if (level == 1) {
                    xVarName = opts[0].xaxisl1;

                    for (var i in chartData) {
                        hasMatch = false;
                        for (var index = 0; index < result.length; ++index) {
                            var data = result[index];

                            if ((data[xVarName] == chartData[i][xVarName]) && (chartData[i][opts[0].xaxis]) == filter) {
                                result[index][yVarName] = result[index][yVarName] + chartData[i][yVarName];
                                hasMatch = true;
                                break;
                            }

                        }
                        if ((hasMatch == false) && ((chartData[i][opts[0].xaxis]) == filter)) {
                            if (result.length < 9) {
                                ditem = {}
                                ditem[xVarName] = chartData[i][xVarName];
                                ditem[yVarName] = chartData[i][yVarName];
                                ditem["caption"] = chartData[i][xVarName].substring(0, 10) + '...';
                                ditem["title"] = chartData[i][xVarName];
                                ditem["op"] = 1.0 - parseFloat("0." + (result.length));
                                result.push(ditem);

                                resultColors[counter] = opts[0].color[0][chartData[i][opts[0].xaxis]];

                                counter += 1;
                            }
                        }
                    }
                }
                else {
                    xVarName = opts[0].xaxis;

                    for (var i in chartData) {
                        hasMatch = false;
                        for (var index = 0; index < result.length; ++index) {
                            var data = result[index];

                            if (data[xVarName] == chartData[i][xVarName]) {
                                result[index][yVarName] = result[index][yVarName] + chartData[i][yVarName];
                                hasMatch = true;
                                break;
                            }
                        }
                        if (hasMatch == false) {
                            ditem = {};
                            ditem[xVarName] = chartData[i][xVarName];
                            ditem[yVarName] = chartData[i][yVarName];
                            ditem["caption"] = opts[0].captions != undefined ? opts[0].captions[0][chartData[i][xVarName]] : "";
                            ditem["title"] = opts[0].captions != undefined ? opts[0].captions[0][chartData[i][xVarName]] : "";
                            ditem["op"] = 1;
                            result.push(ditem);

                            resultColors[counter] = opts[0].color != undefined ? opts[0].color[0][chartData[i][xVarName]] : "";

                            counter += 1;
                        }
                    }
                }


                runningData = result;
                runningColors = resultColors;
                return;
            }

            chartOptions = [{
                "captions": [{ "A": "A", "B": "B", "C": "C" , "D": "D", "DA": "DA", "F": "F" ,"FS": "FS", "PL": "PL", "WD": "WD" ,"WS": "WS" }],
                "color": [{ "A": "#823e73", "B": "#ad9913", "C": "#a15f1f", "D": "#66952b", "DA": "#513f81", "F": "#0080c0", "FS": "#8d3d33", "PL": "#8b3550", "WD": "#00c06e", "WS":"#ff0000" }],
                "xaxis": "Grade",
                "xaxisl1": "Age Group",
                "yaxis": "Total"
            }]

            var chartData = [

                { "Grade": "A",
                "Age Group": "18-24",
                    "Total": 1402
                },
                { "Grade": "A",
                "Age Group": "25-30",
                    "Total": 40
                },
                { "Grade": "A",
                "Age Group": "31-40",
                    "Total": 87
                },
                { "Grade": "A",
                "Age Group": "41-50",
                    "Total": 154
                },
                { "Grade": "A",
                "Age Group": "51&above",
                    "Total": 292
                },
                { "Grade": "B",
                "Age Group": "18-24",
                    "Total": 1212
                },
                { "Grade": "B",
                "Age Group": "25-30",
                    "Total": 48
                },
                { "Grade": "B",
                "Age Group": "31-40",
                    "Total": 72
                },
                { "Grade": "B",
                "Age Group": "41-50",
                    "Total": 136
                },
                { "Grade": "B",
                "Age Group": "51&above",
                    "Total": 286
                },
                { "Grade": "C",
                "Age Group": "18-24",
                    "Total": 775
                },
                { "Grade": "C",
                "Age Group": "25-30",
                    "Total": 30
                },
                { "Grade": "C",
                "Age Group": "31-40",
                    "Total": 58
                },
                { "Grade": "C",
                "Age Group": "41-50",
                    "Total": 77
                },
                { "Grade": "C",
                "Age Group": "51&above",
                    "Total": 179
                },
                { "Grade": "D",
                "Age Group": "18-24",
                    "Total": 236
                },
                { "Grade": "D",
                "Age Group": "25-30",
                    "Total": 18
                },
                { "Grade": "D",
                "Age Group": "31-40",
                    "Total": 28
                },
                { "Grade": "D",
                "Age Group": "41-50",
                    "Total": 47
                },
                { "Grade": "D",
                "Age Group": "51&above",
                    "Total": 69
                },
                { "Grade": "DA",
                "Age Group": "18-24",
                    "Total": 38
                },
                { "Grade": "DA",
                "Age Group": "25-30",
                    "Total": 0
                },
                { "Grade": "DA",
                "Age Group": "31-40",
                    "Total": 4
                },
                { "Grade": "DA",
                "Age Group": "41-50",
                    "Total": 5
                },
                { "Grade": "DA",
                "Age Group": "51&above",
                    "Total": 11
                },
                { "Grade": "F",
                "Age Group": "18-24",
                    "Total": 394
                },
                { "Grade": "F",
                "Age Group": "25-30",
                    "Total": 16
                },
                { "Grade": "F",
                "Age Group": "31-40",
                    "Total": 29
                },
                { "Grade": "F",
                "Age Group": "41-50",
                    "Total": 62
                },
                { "Grade": "F",
                "Age Group": "51&above",
                    "Total": 135
                },
                { "Grade": "FS",
                "Age Group": "18-24",
                    "Total": 4
                },
                { "Grade": "FS",
                "Age Group": "25-30",
                    "Total": 0
                },
                { "Grade": "FS",
                "Age Group": "31-40",
                    "Total": 0
                },
                { "Grade": "FS",
                "Age Group": "41-50",
                    "Total": 0
                },
                { "Grade": "FS",
                "Age Group": "51&above",
                    "Total": 0
                },
                { "Grade": "PL",
                "Age Group": "18-24",
                    "Total": 16
                },
                { "Grade": "PL",
                "Age Group": "25-30",
                    "Total": 0
                },
                { "Grade": "PL",
                "Age Group": "31-40",
                    "Total": 0
                },
                { "Grade": "PL",
                "Age Group": "41-50",
                    "Total": 0
                },
                { "Grade": "PL",
                "Age Group": "51&above",
                    "Total": 3
                },
                { "Grade": "WD",
                "Age Group": "18-24",
                    "Total": 92
                },
                { "Grade": "WD",
                "Age Group": "25-30",
                    "Total": 3
                },
                { "Grade": "WD",
                "Age Group": "31-40",
                    "Total": 10
                },
                { "Grade": "WD",
                "Age Group": "41-50",
                    "Total": 10
                },
                { "Grade": "WD",
                "Age Group": "50&above",
                    "Total": 26
                },
                { "Grade": "WS",
                "Age Group": "18-24",
                    "Total": 43
                },
                { "Grade": "WS",
                "Age Group": "25-30",
                    "Total": 0
                },
                { "Grade": "WS",
                "Age Group": "31-40",
                    "Total": 0
                },
                { "Grade": "WS",
                "Age Group": "41-50",
                    "Total": 0
                },
                { "Grade": "WS",
                "Age Group": "51&above",
                    "Total": 6
                },

            ];

        </script>
    
</body>
</html>