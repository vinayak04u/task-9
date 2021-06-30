function async(){
    let selectInputValue = document.getElementById("searchBox").value;
    if (selectInputValue === "show pods" || selectInputValue === "provide pods" || selectInputValue === "no of pods"){
      desireInput = "kubectl get pods";
  }else if(selectInputValue === "show deployment" || selectInputValue === "show deployments" || selectInputValue === "provide deployment" || selectInputValue === "what is the status of deployment"){
      desireInput = "kubectl get deployment";
  }else if(selectInputValue === "show services" ||  selectInputValue === "get services" || selectInputValue === "svc" || selectInputValue === "all the services" || selectInputValue == "provide services"){
      desireInput = "kubectl get svc";
  }else if(selectInputValue === "Delete complete environment created." || selectInputValue === "delete complete env" || selectInputValue === "delete complete environment" || selectInputValue === "destroy environment" || selectInputValue === "terminate envirnoment" || selectInputValue === "delete all"){
      desireInput = "kubectl delete all --all";
  }else if(((selectInputValue.includes("deploy")) || (selectInputValue.includes("deployments")) || (selectInputValue.includes("deployment")))
  && ((selectInputValue.includes("create")) || (selectInputValue.includes("execute")) || (selectInputValue.includes("launch")))) {
    let deployName = prompt("Enter Deployment Name : ");
    let imageName = prompt("Enter Image Name : ");
    let replica = prompt("Enter the no. of replica: ");
      desireInput = `kubectl create deployment ${deployName} --replicas=${replica} --image=${imageName}`;
  }else if (((selectInputValue.includes("pod"))) && ((selectInputValue.includes("launch")) || (selectInputValue.includes("execute")) || (selectInputValue.includes("create")))) {
    let podName = prompt("Enter Pod Name : ")
    let imageName = prompt("Enter Image Name : ")
    desireInput = `kubectl run pods ${podName} --image=${imageName}`;
  }else{
    desireInput = selectInputValue;
  }
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://<ipaddress>/cgi-bin/server.py?var="+desireInput, true);
    xhr.send();
    xhr.onload = function (){
      let output = xhr.responseText;
      document.getElementById("baseContainer").innerHTML = output;
    }
  }

function launchPod(){
    let podName = document.getElementById("input-pod").value;
    let imageName = document.getElementById("image-name").value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `http://<ipaddress>/cgi-bin/server.py?var=kubectl run ${podName} --image=${imageName}`, true);
    xhr.send();
    xhr.onload = function (){
      let output = xhr.responseText;
      document.getElementById("baseContainer").innerHTML = output;
    }
}
function listPods(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `http://ipadress/cgi-bin/server.py?var=kubectl get pods`, true);
    xhr.send();
    xhr.onload = function (){
      let output = xhr.responseText;
      document.getElementById("baseContainer").innerHTML = output;
    }
}

function launchDeployment(){
    let deploymentName = document.getElementById("deployment-name").value;
    let imageName = document.getElementById("image-name2").value;
    let replica = document.getElementById("replica-amount").value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `http://ip address/cgi-bin/server.py?var=kubectl create deployment ${deploymentName} --replicas=${replica} --image=${imageName}`, true);
    xhr.send();
    xhr.onload = function (){
      let output = xhr.responseText;
      document.getElementById("baseContainer").innerHTML = output;
    }
}

function exposeService(){
    let deploymentName = document.getElementById("deployment-name2").value;
    let portNumber = document.getElementById("port-number").value;
    let lbName = document.getElementById("lb-name").value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `http://ipaddress/cgi-bin/server.py?var=kubectl expose deployment ${deploymentName} --port=${portNumber} --type=${lbName} `, true);
    xhr.send();
    xhr.onload = function (){
      let output = xhr.responseText;
      document.getElementById("baseContainer").innerHTML = output;
    }
}

function removeService(){
    let anything = document.getElementById("anything").value;
    let serviceName = document.getElementById("service-type").value;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `http://ip address/cgi-bin/server.py?var=kubectl delete ${serviceName} ${anything}`, true);
    xhr.send();
    xhr.onload = function (){
      let output = xhr.responseText;
      document.getElementById("baseContainer").innerHTML = output;
    }
}