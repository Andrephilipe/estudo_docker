# Copyright 2017 The Kubernetes Authors.
FROM quay.io/external_storage/nfs-client-provisioner

RUN apk update --no-cache && apk add tzdata
#COPY nfs-client-provisioner /nfs-client-provisioner
#ENTRYPOINT ["/nfs-client-provisioner"]
ENV TZ="America/Sao_Paulo"